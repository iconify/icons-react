import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cswx4ybwp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cswx4ybwp"/>`,
		"fallback": "memory:wall-front-damaged",
	});
}

export default Component;
