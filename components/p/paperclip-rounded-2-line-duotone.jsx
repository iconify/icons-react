import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xbhr7_qlj.css';
import '../../css/c/cbjl0_2fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xbhr7_qlj"/><path class="cbjl0_2fs"/></g>`,
		"fallback": "solar:paperclip-rounded-2-line-duotone",
	});
}

export default Component;
