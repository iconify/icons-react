import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgk4apf_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgk4apf_z"/>`,
		"fallback": "lineicons:plus",
	});
}

export default Component;
