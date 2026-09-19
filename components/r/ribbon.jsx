import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/siwil0b_t.css';
import '../../css/n/nb9g40b3t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="siwil0b_t"/><path class="nb9g40b3t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ribbon",
	});
}

export default Component;
