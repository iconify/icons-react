import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mwvg59b8s.css';
import '../../css/c/cii0-5b2j.css';
import '../../css/r/rnz4p0b8a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mwvg59b8s"/><path class="cii0-5b2j"/><path class="rnz4p0b8a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:money-with-wings",
	});
}

export default Component;
