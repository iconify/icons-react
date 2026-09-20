import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uc32fggjl.css';
import '../../css/a/aw-1gkb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uc32fggjl"/><path class="aw-1gkb-w"/></g>`,
		"fallback": "keyline-icons:music-note-sharp-two-tone",
	});
}

export default Component;
