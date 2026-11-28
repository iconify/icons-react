import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt0i_6v5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt0i_6v5j"/>`,
		"fallback": "noviair-light:stadium-star",
	});
}

export default Component;
