import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk1v-uboa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk1v-uboa"/>`,
		"fallback": "energy-icons:list-checks-20",
	});
}

export default Component;
