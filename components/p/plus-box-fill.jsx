import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtub--b9z.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtub--b9z"/>`,
		"fallback": "memory:plus-box-fill",
	});
}

export default Component;
