import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzq0o3a5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzq0o3a5d"/>`,
		"fallback": "uil:minus-circle",
	});
}

export default Component;
