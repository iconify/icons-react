import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzercbb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fzercbb4p"/>`,
		"fallback": "streamline-logos:iwiw-logo-1-solid",
	});
}

export default Component;
