import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fti_00qzu.css';
import '../../css/r/rjkpgvb4u.css';
import '../../css/o/oz0g7ccbp.css';
import '../../css/v/vlkz1ybdq.css';
import '../../css/y/yzz0gf2jy.css';
import '../../css/y/yx3yvob9n.css';
import '../../css/h/h0rnz4dpv.css';
import '../../css/w/wkhzey8gk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fti_00qzu"/><path class="rjkpgvb4u"/><path class="oz0g7ccbp"/><path class="vlkz1ybdq"/><path class="yzz0gf2jy"/><path class="yx3yvob9n"/><path class="h0rnz4dpv"/><path class="wkhzey8gk"/></g>`,
		"fallback": "icon-park-outline:multi-ring",
	});
}

export default Component;
