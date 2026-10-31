import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/b77izeoak.css';
import '../../css/g/g-mlzkflz.css';
import '../../css/j/jg84y8bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7dzg2Vjd" x1="10" x2="14" y1="2.38" y2="21.62" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="b77izeoak wm-k"/><path class="g-mlzkflz wm-deco"/><path fill="url(#SVG7dzg2Vjd)" class="jg84y8bol wm-k"/></g>`,
		"fallback": "withicons-valentine:link",
	});
}

export default Component;
