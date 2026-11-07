import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c-c_dm15f.css';
import '../../css/o/op17iszzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c-c_dm15f"/><path class="op17iszzv"/></g>`,
		"fallback": "solar:rewind-back-line-duotone",
	});
}

export default Component;
