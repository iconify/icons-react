import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6vx8ibcd.css';
import '../../css/i/ivjvhtoza.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e6vx8ibcd"/><path class="ivjvhtoza"/></g>`,
		"fallback": "glyphs-poly:subtract",
	});
}

export default Component;
