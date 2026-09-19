import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rh3zx34ux.css';
import '../../css/o/olx051veg.css';
import '../../css/d/duep00bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rh3zx34ux"/><path class="olx051veg"/><path class="duep00bey"/></g>`,
		"fallback": "hugeicons:waste-restore",
	});
}

export default Component;
