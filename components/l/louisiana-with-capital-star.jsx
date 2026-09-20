import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8xpn1iix.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8xpn1iix"/>`,
		"fallback": "pinhead:louisiana-with-capital-star",
	});
}

export default Component;
