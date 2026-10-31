import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gno__6bnx.css';
import '../../css/n/npbiomb3d.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/o/olay1zo5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gno__6bnx wm-shadow"/><path class="npbiomb3d wm-shadow"/><path class="cvpr-5bot"/><path class="olay1zo5l"/></g>`,
		"fallback": "withicons-brutal:panel-left-open",
	});
}

export default Component;
