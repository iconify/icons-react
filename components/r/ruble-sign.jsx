import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it3rg1bvf.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it3rg1bvf"/>`,
		"fallback": "fa6-solid:ruble-sign",
	});
}

export default Component;
