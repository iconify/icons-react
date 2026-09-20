import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/thgoyylzb.css';
import '../../css/y/y1bgarbnk.css';
import '../../css/s/sngcg6bqy.css';
import '../../css/t/t9nb_q56o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="thgoyylzb"/><path class="y1bgarbnk"/><path class="sngcg6bqy"/><path class="t9nb_q56o"/></g>`,
		"fallback": "streamline-freehand-color:unlink-broken-chain-1",
	});
}

export default Component;
