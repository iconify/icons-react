import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykz1nx-0u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ykz1nx-0u"/>`,
		"fallback": "streamline:sign-at-remix",
	});
}

export default Component;
