import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mah91acmx.css';
import '../../css/u/ujsvax3wi.css';
import '../../css/c/cb6b9pzhv.css';
import '../../css/w/wbslkwlht.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mah91acmx"/><path class="ujsvax3wi"/><path class="cb6b9pzhv"/><path class="wbslkwlht"/></g>`,
		"fallback": "fluent-emoji-flat:sparkler",
	});
}

export default Component;
