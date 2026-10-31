import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/addmy0bsb.css';
import '../../css/u/uvxpl2qsi.css';
import '../../css/w/wia1rm1ya.css';
import '../../css/y/ys20mbbru.css';
import '../../css/r/rszea5viq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="addmy0bsb wm-shadow"/><path class="uvxpl2qsi"/><path class="wia1rm1ya"/><path class="ys20mbbru"/><path class="rszea5viq"/></g>`,
		"fallback": "withicons-retro:tv",
	});
}

export default Component;
