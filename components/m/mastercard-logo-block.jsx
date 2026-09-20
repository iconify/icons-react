import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f36i_688s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f36i_688s"/>`,
		"fallback": "streamline-logos:mastercard-logo-block",
	});
}

export default Component;
