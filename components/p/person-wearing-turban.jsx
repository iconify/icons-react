import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ancd0qben.css';
import '../../css/z/z_y-m9b3t.css';
import '../../css/a/a3z8wibns.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ancd0qben"/><path class="z_y-m9b3t"/><path class="a3z8wibns"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-wearing-turban",
	});
}

export default Component;
