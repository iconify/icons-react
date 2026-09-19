import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujk5wwbkz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujk5wwbkz"/>`,
		"fallback": "fa6-solid:monument",
	});
}

export default Component;
