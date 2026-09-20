import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avgb43z_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="avgb43z_v"/>`,
		"fallback": "streamline-sharp:pin-1-solid",
	});
}

export default Component;
