import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aghtwusng.css';
import '../../css/j/jpmk62bzi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aghtwusng"/><path class="jpmk62bzi"/></g>`,
		"fallback": "fluent-emoji-flat:japanese-acceptable-button",
	});
}

export default Component;
