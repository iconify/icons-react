import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce_5lo_lk.css';
import '../../css/o/opmfvvg-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce_5lo_lk"/><path class="opmfvvg-c"/>`,
		"fallback": "streamline-logos:magento-logo-solid",
	});
}

export default Component;
