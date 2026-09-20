import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxc-g272t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxc-g272t"/>`,
		"fallback": "mdi-light:view-dashboard",
	});
}

export default Component;
