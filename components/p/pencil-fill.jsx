import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d36krc8rv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d36krc8rv"/>`,
		"fallback": "bi:pencil-fill",
	});
}

export default Component;
