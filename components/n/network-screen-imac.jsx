import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsxpagbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsxpagbdk"/>`,
		"fallback": "streamline-cyber:network-screen-imac",
	});
}

export default Component;
