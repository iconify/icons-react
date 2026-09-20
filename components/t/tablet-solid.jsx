import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0zfj_7yy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0zfj_7yy"/>`,
		"fallback": "la:tablet-solid",
	});
}

export default Component;
