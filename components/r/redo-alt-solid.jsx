import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dak5-acry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dak5-acry"/>`,
		"fallback": "la:redo-alt-solid",
	});
}

export default Component;
