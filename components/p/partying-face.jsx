import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m57a7fb6a.css';
import '../../css/g/gbq2vgodd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m57a7fb6a"/><path class="gbq2vgodd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:partying-face",
	});
}

export default Component;
