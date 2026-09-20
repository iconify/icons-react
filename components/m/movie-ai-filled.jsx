import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niy991b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niy991b9z"/>`,
		"fallback": "ix:movie-ai-filled",
	});
}

export default Component;
