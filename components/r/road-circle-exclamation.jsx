import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84do1r9k.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w84do1r9k"/>`,
		"fallback": "fa6-solid:road-circle-exclamation",
	});
}

export default Component;
