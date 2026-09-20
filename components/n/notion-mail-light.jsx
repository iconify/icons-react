import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx29zvbcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx29zvbcx"/>`,
		"fallback": "selfhst:notion-mail-light",
	});
}

export default Component;
