import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sofr25-sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sofr25-sz"/>`,
		"fallback": "streamline-freehand:phone-actions-wait-hold",
	});
}

export default Component;
