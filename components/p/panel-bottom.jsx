import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/azblslbta.css';
import '../../css/b/b0vc4hgrz.css';
import '../../css/o/o05uqgbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="azblslbta wm-shadow"/><path class="b0vc4hgrz"/><path class="o05uqgbjr"/></g>`,
		"fallback": "withicons-retro:panel-bottom",
	});
}

export default Component;
