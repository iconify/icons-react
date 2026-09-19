import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdhb58bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdhb58bwz"/>`,
		"fallback": "healthicons:polygon-outline-24px",
	});
}

export default Component;
