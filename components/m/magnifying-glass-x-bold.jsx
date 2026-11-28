import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agd6jk7an.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agd6jk7an"/>`,
		"fallback": "pullo:magnifying-glass-x-bold",
	});
}

export default Component;
