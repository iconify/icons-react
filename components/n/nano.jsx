import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diqu0zb_j.css';

const viewBox = {"width":383,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diqu0zb_j"/>`,
		"fallback": "file-icons:nano",
	});
}

export default Component;
