import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b729ecckd.css';
import '../../css/l/ly7m2vz7v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b729ecckd"/><path class="ly7m2vz7v"/></g>`,
		"fallback": "fluent-emoji-flat:sign-of-the-horns-medium-light",
	});
}

export default Component;
