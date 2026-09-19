import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6w-jwb4f.css';
import '../../css/b/b64e4sbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6w-jwb4f"/><path class="b64e4sbdf"/></g>`,
		"fallback": "hugeicons:link-06",
	});
}

export default Component;
