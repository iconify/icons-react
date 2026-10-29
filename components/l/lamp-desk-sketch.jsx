import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nadl88edg.css';
import '../../css/e/e-6vslbun.css';
import '../../css/k/k-9auubar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nadl88edg"/><path class="e-6vslbun"/><path class="k-9auubar"/></g>`,
		"fallback": "withicons:lamp-desk-sketch",
	});
}

export default Component;
