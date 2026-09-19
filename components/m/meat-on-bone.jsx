import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sobp7ui6c.css';
import '../../css/q/q6antebxy.css';
import '../../css/y/yp73vgbag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sobp7ui6c"/><path class="q6antebxy"/><path class="yp73vgbag"/></g>`,
		"fallback": "fluent-emoji-flat:meat-on-bone",
	});
}

export default Component;
