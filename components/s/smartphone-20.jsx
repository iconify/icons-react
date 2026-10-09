import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck9wswbnb.css';
import '../../css/a/aifu62-rj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck9wswbnb"/><path class="aifu62-rj"/>`,
		"fallback": "energy-icons:smartphone-20",
	});
}

export default Component;
