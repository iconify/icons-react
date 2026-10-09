import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcemadp9z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcemadp9z"/>`,
		"fallback": "energy-icons:spring-20-bold",
	});
}

export default Component;
