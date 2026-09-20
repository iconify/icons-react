import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj348nt0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj348nt0g"/>`,
		"fallback": "mdi:nfc-tap",
	});
}

export default Component;
