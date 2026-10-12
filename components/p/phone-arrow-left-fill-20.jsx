import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2j72gzuc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2j72gzuc"/>`,
		"fallback": "garden:phone-arrow-left-fill-20",
	});
}

export default Component;
