import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyd8q7b-w.css';
import '../../css/x/x4db5135n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyd8q7b-w"/><path class="x4db5135n"/>`,
		"fallback": "si:play-forward-duotone",
	});
}

export default Component;
