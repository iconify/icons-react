import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-o4xzb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-o4xzb7z"/>`,
		"fallback": "noviair:video",
	});
}

export default Component;
