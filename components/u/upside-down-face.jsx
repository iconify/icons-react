import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dsi4yebmy.css';
import '../../css/z/zg32i5q-m.css';
import '../../css/f/f-db-9jnx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dsi4yebmy"/><path class="zg32i5q-m"/><path class="f-db-9jnx"/></g>`,
		"fallback": "fluent-emoji-flat:upside-down-face",
	});
}

export default Component;
