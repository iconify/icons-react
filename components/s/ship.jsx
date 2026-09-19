import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbs0eacyb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbs0eacyb"/>`,
		"fallback": "fa6-solid:ship",
	});
}

export default Component;
