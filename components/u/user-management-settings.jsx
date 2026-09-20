import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv5_m0b5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uv5_m0b5v"/>`,
		"fallback": "ix:user-management-settings",
	});
}

export default Component;
