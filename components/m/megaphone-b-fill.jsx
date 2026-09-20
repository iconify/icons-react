import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-4nj7z5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-4nj7z5c"/>`,
		"fallback": "mage:megaphone-b-fill",
	});
}

export default Component;
