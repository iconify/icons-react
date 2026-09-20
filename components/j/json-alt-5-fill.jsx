import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_b94v5bn.css';
import '../../css/f/f7p2cw_yv.css';
import '../../css/r/rkuxmrx9q.css';
import '../../css/n/ndmlhzbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_b94v5bn"/><path class="f7p2cw_yv"/><path class="rkuxmrx9q"/><path class="ndmlhzbky"/>`,
		"fallback": "si:json-alt-5-fill",
	});
}

export default Component;
