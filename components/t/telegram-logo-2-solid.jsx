import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6zsho01p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f6zsho01p"/>`,
		"fallback": "streamline-logos:telegram-logo-2-solid",
	});
}

export default Component;
