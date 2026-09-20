import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzehumb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzehumb2e"/>`,
		"fallback": "mdi:panorama-wide-angle",
	});
}

export default Component;
