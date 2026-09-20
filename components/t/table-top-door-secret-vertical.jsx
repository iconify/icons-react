import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daormvd9j.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daormvd9j"/>`,
		"fallback": "memory:table-top-door-secret-vertical",
	});
}

export default Component;
