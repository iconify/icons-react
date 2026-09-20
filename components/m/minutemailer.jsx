import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi81_1wwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi81_1wwh"/>`,
		"fallback": "thesvg-color:minutemailer",
	});
}

export default Component;
