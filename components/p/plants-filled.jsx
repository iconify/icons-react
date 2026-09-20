import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx_m0xbxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx_m0xbxc"/>`,
		"fallback": "ix:plants-filled",
	});
}

export default Component;
