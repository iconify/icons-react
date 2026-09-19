import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk_c26-lf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk_c26-lf"/>`,
		"fallback": "heroicons-solid:star",
	});
}

export default Component;
