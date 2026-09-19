import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxeic1xhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxeic1xhu"/>`,
		"fallback": "game-icons:virtual-marker",
	});
}

export default Component;
