import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akvvu885u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="akvvu885u"/>`,
		"fallback": "streamline-sharp:phone-ringing-1-solid",
	});
}

export default Component;
