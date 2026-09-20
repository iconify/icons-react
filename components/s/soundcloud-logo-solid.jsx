import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqa6zxbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yqa6zxbtr"/>`,
		"fallback": "streamline-logos:soundcloud-logo-solid",
	});
}

export default Component;
