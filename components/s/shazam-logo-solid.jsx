import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qok2qrelu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qok2qrelu"/>`,
		"fallback": "streamline-logos:shazam-logo-solid",
	});
}

export default Component;
