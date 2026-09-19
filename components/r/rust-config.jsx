import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnh7u9f3r.css';
import '../../css/v/vo3vedbmo.css';
import '../../css/g/gfjx0h0sh.css';
import '../../css/c/cxs370dyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnh7u9f3r"/><g class="vo3vedbmo"><path transform="matrix(.79989 0 0 .79796 .1 -.697)" class="gfjx0h0sh"/><path transform="matrix(.79989 0 0 .79796 .1 -.697)" class="cxs370dyl"/></g>`,
		"fallback": "catppuccin:rust-config",
	});
}

export default Component;
