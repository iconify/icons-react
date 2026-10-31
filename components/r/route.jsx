import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/icffwjiiu.css';
import '../../css/z/zcrulbcrk.css';
import '../../css/y/yu_igna9n.css';
import '../../css/l/llthbtb_s.css';
import '../../css/o/oxslsccrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="icffwjiiu wm-shadow"/><path class="wm-shadow zcrulbcrk"/><path class="yu_igna9n"/><path class="llthbtb_s"/><path class="oxslsccrf"/></g>`,
		"fallback": "withicons-brutal:route",
	});
}

export default Component;
