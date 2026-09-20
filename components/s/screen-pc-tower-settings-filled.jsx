import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyw221b0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yyw221b0x"/>`,
		"fallback": "ix:screen-pc-tower-settings-filled",
	});
}

export default Component;
