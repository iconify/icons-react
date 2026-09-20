import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tr_5cybnu.css';
import '../../css/k/kbiba4bgc.css';
import '../../css/a/an4w8gbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tr_5cybnu"/><path class="kbiba4bgc"/><circle class="an4w8gbhl"/></g>`,
		"fallback": "majesticons:map-marker-area-line",
	});
}

export default Component;
