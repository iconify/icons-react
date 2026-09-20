import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2dxeqb0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2dxeqb0n"/>`,
		"fallback": "ix:steering-user-filled",
	});
}

export default Component;
