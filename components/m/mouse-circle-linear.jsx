import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nr28dlb2d.css';
import '../../css/f/f6a82rrqn.css';
import '../../css/b/b6enbdbml.css';
import '../../css/q/qq_vvgblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nr28dlb2d"/><path class="f6a82rrqn"/><path class="b6enbdbml"/><path class="qq_vvgblc"/></g>`,
		"fallback": "solar:mouse-circle-linear",
	});
}

export default Component;
