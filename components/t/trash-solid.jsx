import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-5b-ibab.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-5b-ibab"/>`,
		"fallback": "la:trash-solid",
	});
}

export default Component;
