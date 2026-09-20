import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xme1-zb8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xme1-zb8a"/>`,
		"fallback": "ix:star-add-filled",
	});
}

export default Component;
