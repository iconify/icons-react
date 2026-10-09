import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwphwybks.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwphwybks"/>`,
		"fallback": "energy-icons:signal-medium-20",
	});
}

export default Component;
