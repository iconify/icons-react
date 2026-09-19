import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s672d3bog.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s672d3bog"/>`,
		"fallback": "heroicons-solid:thumb-up",
	});
}

export default Component;
