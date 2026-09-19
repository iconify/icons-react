import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyyle4btl.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyyle4btl"/>`,
		"fallback": "fa-brands:npm",
	});
}

export default Component;
