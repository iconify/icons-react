import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axl4_ccxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axl4_ccxf"/>`,
		"fallback": "mage:tag-2-fill",
	});
}

export default Component;
