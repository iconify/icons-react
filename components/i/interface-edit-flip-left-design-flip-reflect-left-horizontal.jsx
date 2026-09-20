import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meonpbcpx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meonpbcpx"/>`,
		"fallback": "streamline:interface-edit-flip-left-design-flip-reflect-left-horizontal",
	});
}

export default Component;
