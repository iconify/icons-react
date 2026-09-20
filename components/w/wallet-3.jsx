import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w36eivbky.css';
import '../../css/i/isad52bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w36eivbky"/><path class="isad52bmp"/>`,
		"fallback": "token:wallet-3",
	});
}

export default Component;
