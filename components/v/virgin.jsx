import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqe27cb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqe27cb6h"/>`,
		"fallback": "thesvg:virgin",
	});
}

export default Component;
