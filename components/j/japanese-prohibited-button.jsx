import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4902cctb.css';
import '../../css/l/ldea_7odr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w4902cctb"/><path class="ldea_7odr"/></g>`,
		"fallback": "fluent-emoji-flat:japanese-prohibited-button",
	});
}

export default Component;
