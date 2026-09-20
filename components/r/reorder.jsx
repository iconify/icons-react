import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhx1nlb_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mhx1nlb_v"/>`,
		"fallback": "ix:reorder",
	});
}

export default Component;
