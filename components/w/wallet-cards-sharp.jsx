import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykze3k15m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykze3k15m"/>`,
		"fallback": "keyline-icons:wallet-cards-sharp",
	});
}

export default Component;
