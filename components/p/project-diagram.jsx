import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shqqa0bmj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shqqa0bmj"/>`,
		"fallback": "fa7-solid:project-diagram",
	});
}

export default Component;
