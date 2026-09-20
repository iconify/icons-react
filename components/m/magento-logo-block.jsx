import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej5bhbbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ej5bhbbvo"/>`,
		"fallback": "streamline-logos:magento-logo-block",
	});
}

export default Component;
