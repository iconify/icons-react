import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8wy-6b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8wy-6b0p"/>`,
		"fallback": "streamline-logos:skype-logo-1-solid",
	});
}

export default Component;
