import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iprtbcb_s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iprtbcb_s"/>`,
		"fallback": "qlementine-icons:tuba-16",
	});
}

export default Component;
