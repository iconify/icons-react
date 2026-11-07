import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z_nmibcey.css';
import '../../css/s/smbap4brt.css';
import '../../css/e/ed8oz0bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z_nmibcey"/><path class="smbap4brt"/><path class="ed8oz0bcx"/></g>`,
		"fallback": "solar:waterdrops-linear",
	});
}

export default Component;
