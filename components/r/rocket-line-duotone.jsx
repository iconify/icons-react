import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v4x3u8_wr.css';
import '../../css/t/td61ysgvc.css';
import '../../css/x/x28ntvb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v4x3u8_wr"/><path class="td61ysgvc"/><path class="x28ntvb8l"/></g>`,
		"fallback": "solar:rocket-line-duotone",
	});
}

export default Component;
