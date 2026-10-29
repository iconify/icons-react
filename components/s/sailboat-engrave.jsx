import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ywn0ijbmf.css';
import '../../css/f/f5-lpey4g.css';
import '../../css/y/ypv0z_bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ywn0ijbmf"/><path class="f5-lpey4g wm-shadow"/><path class="ypv0z_bsz"/></g>`,
		"fallback": "withicons:sailboat-engrave",
	});
}

export default Component;
