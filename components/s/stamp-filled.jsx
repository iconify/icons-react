import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfhcyi7lp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfhcyi7lp"/>`,
		"fallback": "ix:stamp-filled",
	});
}

export default Component;
