import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/u/ubhyikblw.css';
import '../../css/e/e4xkq0rzn.css';
import '../../css/u/u1d-vac7q.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="ubhyikblw"/><path class="e4xkq0rzn"/><path class="u1d-vac7q"/></g>`,
		"fallback": "streamline-stickies-color:product-cloth",
	});
}

export default Component;
