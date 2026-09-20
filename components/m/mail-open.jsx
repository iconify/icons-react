import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecvi1i71l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecvi1i71l"/>`,
		"fallback": "pixelarticons:mail-open",
	});
}

export default Component;
