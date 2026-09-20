import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz2qli0dy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz2qli0dy"/>`,
		"fallback": "la:mars-double",
	});
}

export default Component;
