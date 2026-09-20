import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgn0bs1rv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgn0bs1rv"/>`,
		"fallback": "la:taxi",
	});
}

export default Component;
