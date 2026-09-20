import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/slj0-4n5n.css';
import '../../css/k/khlba_bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="slj0-4n5n"/><path class="khlba_bkg"/></g>`,
		"fallback": "solar:stars-minimalistic-outline",
	});
}

export default Component;
