import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cscv_fw-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cscv_fw-h"/>`,
		"fallback": "thesvg-color:system76",
	});
}

export default Component;
