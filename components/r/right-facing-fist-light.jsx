import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux8qg05no.css';
import '../../css/h/h5axdgb9d.css';
import '../../css/y/ypap8qjbo.css';
import '../../css/c/c0nufobsu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ux8qg05no"/><path class="h5axdgb9d"/><path clip-rule="evenodd" class="ypap8qjbo"/><path class="c0nufobsu"/></g>`,
		"fallback": "fluent-emoji-flat:right-facing-fist-light",
	});
}

export default Component;
