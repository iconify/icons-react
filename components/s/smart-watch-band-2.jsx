import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kbx4ky0kr.css';
import '../../css/p/psgmrubdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kbx4ky0kr"/><path class="psgmrubdu"/></g>`,
		"fallback": "streamline-freehand:smart-watch-band-2",
	});
}

export default Component;
