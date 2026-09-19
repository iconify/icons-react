import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oozwqwb4x.css';
import '../../css/a/aj2pt4byr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oozwqwb4x"/><path class="aj2pt4byr"/></g>`,
		"fallback": "fluent-emoji-flat:red-apple",
	});
}

export default Component;
