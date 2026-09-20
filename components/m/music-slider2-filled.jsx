import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loe9jibay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="loe9jibay"/>`,
		"fallback": "reicon:music-slider2-filled",
	});
}

export default Component;
