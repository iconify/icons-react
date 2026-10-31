import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w4o1dbf3v.css';
import '../../css/u/uablz1qlt.css';
import '../../css/l/lz7udcbbw.css';
import '../../css/t/tg7vf-bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w4o1dbf3v wm-shadow"/><path class="uablz1qlt wm-shadow"/><path class="lz7udcbbw"/><path class="tg7vf-bah"/></g>`,
		"fallback": "withicons-brutal:moon",
	});
}

export default Component;
