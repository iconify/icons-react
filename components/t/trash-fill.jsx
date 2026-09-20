import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa1h9pe-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa1h9pe-s"/>`,
		"fallback": "mage:trash-fill",
	});
}

export default Component;
