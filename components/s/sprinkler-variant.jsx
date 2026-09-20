import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcfi8vkuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcfi8vkuc"/>`,
		"fallback": "mdi:sprinkler-variant",
	});
}

export default Component;
