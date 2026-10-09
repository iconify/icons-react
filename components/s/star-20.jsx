import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjuaf1bqz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjuaf1bqz"/>`,
		"fallback": "energy-icons:star-20",
	});
}

export default Component;
