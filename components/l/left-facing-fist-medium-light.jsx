import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jh2-ycsxf.css';
import '../../css/z/zza1cnb9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jh2-ycsxf"/><path class="zza1cnb9j"/></g>`,
		"fallback": "fluent-emoji-flat:left-facing-fist-medium-light",
	});
}

export default Component;
