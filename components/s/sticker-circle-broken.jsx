import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r6a-dybup.css';
import '../../css/l/l-oan6uxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r6a-dybup"/><path class="l-oan6uxi"/></g>`,
		"fallback": "solar:sticker-circle-broken",
	});
}

export default Component;
