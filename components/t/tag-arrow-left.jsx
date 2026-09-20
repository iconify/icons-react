import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubk2lab2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubk2lab2f"/>`,
		"fallback": "mdi:tag-arrow-left",
	});
}

export default Component;
