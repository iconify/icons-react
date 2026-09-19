import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8-hfdun.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8-hfdun"/>`,
		"fallback": "fa-solid:kaaba",
	});
}

export default Component;
