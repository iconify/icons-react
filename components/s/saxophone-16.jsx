import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxe8n-bul.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sxe8n-bul"/>`,
		"fallback": "qlementine-icons:saxophone-16",
	});
}

export default Component;
