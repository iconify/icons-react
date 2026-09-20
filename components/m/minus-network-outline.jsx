import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra3wu2bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra3wu2bbl"/>`,
		"fallback": "mdi:minus-network-outline",
	});
}

export default Component;
