import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7-5zibul.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7-5zibul"/>`,
		"fallback": "fa6-solid:sort-down",
	});
}

export default Component;
