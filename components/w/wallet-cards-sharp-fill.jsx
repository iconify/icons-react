import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehso6ts7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ehso6ts7d"/>`,
		"fallback": "keyline-icons:wallet-cards-sharp-fill",
	});
}

export default Component;
