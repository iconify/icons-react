import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pi6xz2b_n.css';
import '../../css/d/dtoolxbmj.css';
import '../../css/n/nvxxmxb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pi6xz2b_n"/><path class="dtoolxbmj"/><path class="nvxxmxb7r"/></g>`,
		"fallback": "solar:link-minimalistic-2-line-duotone",
	});
}

export default Component;
