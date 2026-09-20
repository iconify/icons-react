import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz2j7vb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wz2j7vb7c"/>`,
		"fallback": "ix:pc-tower-settings-filled",
	});
}

export default Component;
