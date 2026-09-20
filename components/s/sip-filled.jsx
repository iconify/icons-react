import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9olh8b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9olh8b5i"/>`,
		"fallback": "tdesign:sip-filled",
	});
}

export default Component;
