import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yl6j-sw3a.css';
import '../../css/w/w46zwovhm.css';
import '../../css/f/fb_cx8b6e.css';
import '../../css/z/zk8wz60ql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="yl6j-sw3a"/><ellipse class="w46zwovhm"/><ellipse class="fb_cx8b6e"/><path class="zk8wz60ql"/></g>`,
		"fallback": "icon-park-outline:tire-swing",
	});
}

export default Component;
