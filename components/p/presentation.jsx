import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyt08dpgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyt08dpgz"/>`,
		"fallback": "mdi:presentation",
	});
}

export default Component;
