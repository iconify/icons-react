import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty4atgz1j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty4atgz1j"/>`,
		"fallback": "dashicons:shield",
	});
}

export default Component;
