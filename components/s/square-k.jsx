import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xky9ngkyv.css';
import '../../css/p/pdz_t30dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xky9ngkyv"/><path class="pdz_t30dw"/></g>`,
		"fallback": "tabler:square-k",
	});
}

export default Component;
