import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk7y6rbwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk7y6rbwz"/>`,
		"fallback": "energy-icons:list-20-bold",
	});
}

export default Component;
