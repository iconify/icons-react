import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erv4znb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="erv4znb5t"/>`,
		"fallback": "si:smart-phone-fill",
	});
}

export default Component;
