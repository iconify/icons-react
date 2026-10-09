import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1ddg9bac.css';
import '../../css/a/a2s7bl5_y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1ddg9bac"/><path class="a2s7bl5_y"/>`,
		"fallback": "energy-icons:shower-20-bold",
	});
}

export default Component;
