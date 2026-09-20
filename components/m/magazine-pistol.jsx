import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl5anftwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl5anftwz"/>`,
		"fallback": "mdi:magazine-pistol",
	});
}

export default Component;
