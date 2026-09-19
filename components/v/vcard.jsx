import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-9ezbhd.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-9ezbhd"/>`,
		"fallback": "ps:vcard",
	});
}

export default Component;
