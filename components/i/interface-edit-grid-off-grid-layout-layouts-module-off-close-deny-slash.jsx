import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npxiwlb0j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npxiwlb0j"/>`,
		"fallback": "streamline:interface-edit-grid-off-grid-layout-layouts-module-off-close-deny-slash",
	});
}

export default Component;
