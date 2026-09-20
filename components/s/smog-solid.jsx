import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhdhe4-ie.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhdhe4-ie"/>`,
		"fallback": "la:smog-solid",
	});
}

export default Component;
