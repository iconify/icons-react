import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r45y58qaa.css';
import '../../css/h/hx50hlb9i.css';
import '../../css/p/pkli7zb5m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r45y58qaa"/><path class="hx50hlb9i"/><path class="pkli7zb5m"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-student",
	});
}

export default Component;
