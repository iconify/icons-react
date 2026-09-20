import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swa6fxbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swa6fxbkr"/>`,
		"fallback": "streamline-logos:rdio-logo-solid",
	});
}

export default Component;
