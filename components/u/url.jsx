import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nxw-yv7wb.css';
import '../../css/u/um4n3qbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nxw-yv7wb"/><path class="um4n3qbii"/></g>`,
		"fallback": "humbleicons:url",
	});
}

export default Component;
