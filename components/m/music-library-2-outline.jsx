import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r-_gevz2p.css';
import '../../css/e/e_h47wbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r-_gevz2p"/><path class="e_h47wbjh"/></g>`,
		"fallback": "solar:music-library-2-outline",
	});
}

export default Component;
