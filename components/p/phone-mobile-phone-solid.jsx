import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3u8x_kdf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3u8x_kdf"/>`,
		"fallback": "streamline:phone-mobile-phone-solid",
	});
}

export default Component;
