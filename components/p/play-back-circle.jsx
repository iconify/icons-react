import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xblyoz06u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xblyoz06u"/>`,
		"fallback": "famicons:play-back-circle",
	});
}

export default Component;
