import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nspy7xbzc.css';
import '../../css/u/uqtz_ylrn.css';
import '../../css/y/y8nf-7b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nspy7xbzc"/><path class="uqtz_ylrn"/><path class="y8nf-7b3i"/></g>`,
		"fallback": "hugeicons:ramadhan-02",
	});
}

export default Component;
