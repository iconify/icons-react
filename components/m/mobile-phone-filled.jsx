import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz5ax-yoi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wz5ax-yoi"/>`,
		"fallback": "ix:mobile-phone-filled",
	});
}

export default Component;
