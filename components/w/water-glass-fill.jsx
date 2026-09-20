import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duozttb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duozttb9x"/>`,
		"fallback": "mage:water-glass-fill",
	});
}

export default Component;
