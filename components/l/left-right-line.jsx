import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi8prk_nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi8prk_nz"/>`,
		"fallback": "si:left-right-line",
	});
}

export default Component;
