import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgy83lbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgy83lbvc"/>`,
		"fallback": "boxicons:quote-single-right-filled",
	});
}

export default Component;
