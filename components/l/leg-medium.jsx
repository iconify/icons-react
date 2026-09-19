import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4w6lob_w.css';
import '../../css/z/ztdrs-bzl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a4w6lob_w"/><path class="ztdrs-bzl"/></g>`,
		"fallback": "fluent-emoji-flat:leg-medium",
	});
}

export default Component;
