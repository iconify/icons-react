import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_q_9ubpk.css';
import '../../css/u/ucsq06bff.css';
import '../../css/f/f3s8qh61l.css';
import '../../css/a/a6mx032-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_q_9ubpk"/><path class="ucsq06bff"/><path clip-rule="evenodd" class="f3s8qh61l"/><path class="a6mx032-a"/>`,
		"fallback": "token:osmosis",
	});
}

export default Component;
