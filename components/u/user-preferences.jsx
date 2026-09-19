import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z-d7g1b-g.css';
import '../../css/h/hclqxqegg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="z-d7g1b-g"/><path class="hclqxqegg"/></g>`,
		"fallback": "gcp:user-preferences",
	});
}

export default Component;
