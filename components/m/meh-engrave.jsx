import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y_dfk98ko.css';
import '../../css/d/ddwgo19qw.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/b/b_cv058cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k y_dfk98ko"/><path class="ddwgo19qw wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="b_cv058cj wm-a"/></g>`,
		"fallback": "withicons:meh-engrave",
	});
}

export default Component;
