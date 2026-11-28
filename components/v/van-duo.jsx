import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-fh0ib4u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/w/w3i1zx0jw.css';
import '../../css/t/toteg6s6e.css';
import '../../css/r/rt7fb-bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-fh0ib4u secondary"/><g class="dt0cm9dhy primary"><path class="ij3vyybgh"/><path class="w3i1zx0jw"/><path class="toteg6s6e"/><path class="rt7fb-bar"/></g>`,
		"fallback": "iconaut:van-duo",
	});
}

export default Component;
