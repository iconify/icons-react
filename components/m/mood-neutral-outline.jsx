import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_d7vcznv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_d7vcznv"/>`,
		"fallback": "zondicons:mood-neutral-outline",
	});
}

export default Component;
