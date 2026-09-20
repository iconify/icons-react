import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nr28dlb2d.css';
import '../../css/f/f6a82rrqn.css';
import '../../css/b/b6enbdbml.css';
import '../../css/y/ywyqt1-eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nr28dlb2d"/><path class="f6a82rrqn"/><path class="b6enbdbml"/><path class="ywyqt1-eg"/></g>`,
		"fallback": "solar:mouse-circle-line-duotone",
	});
}

export default Component;
