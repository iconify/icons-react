import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zykn1z-dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zykn1z-dc"/>`,
		"fallback": "noviair-light:mail-off",
	});
}

export default Component;
