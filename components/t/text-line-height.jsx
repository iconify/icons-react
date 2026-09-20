import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v4-9_wv8t.css';
import '../../css/t/t04y93jxd.css';
import '../../css/h/hk6vdne3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v4-9_wv8t"/><path class="t04y93jxd"/><path class="hk6vdne3h"/></g>`,
		"fallback": "proicons:text-line-height",
	});
}

export default Component;
