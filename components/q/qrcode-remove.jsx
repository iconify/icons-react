import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at9xv_bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at9xv_bjv"/>`,
		"fallback": "mdi:qrcode-remove",
	});
}

export default Component;
