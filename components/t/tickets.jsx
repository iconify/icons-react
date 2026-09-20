import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ps7hhctio.css';
import '../../css/a/ak48j_bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ps7hhctio"/><path clip-rule="evenodd" class="ak48j_bkp"/></g>`,
		"fallback": "majesticons:tickets",
	});
}

export default Component;
