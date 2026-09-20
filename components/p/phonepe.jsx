import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrt8iwbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrt8iwbhs"/>`,
		"fallback": "simple-icons:phonepe",
	});
}

export default Component;
