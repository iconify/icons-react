import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dybwt5b_o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dybwt5b_o"/>`,
		"fallback": "bi:ticket-perferated-fill",
	});
}

export default Component;
