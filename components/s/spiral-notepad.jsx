import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeedibbap.css';
import '../../css/q/qzrf2_c2c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeedibbap"/><path class="qzrf2_c2c"/>`,
		"fallback": "fluent-emoji-high-contrast:spiral-notepad",
	});
}

export default Component;
