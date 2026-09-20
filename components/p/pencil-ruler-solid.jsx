import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur9c4g87e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur9c4g87e"/>`,
		"fallback": "la:pencil-ruler-solid",
	});
}

export default Component;
