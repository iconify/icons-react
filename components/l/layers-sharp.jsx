import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i76rxtbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i76rxtbdq"/>`,
		"fallback": "keyline-icons:layers-sharp",
	});
}

export default Component;
