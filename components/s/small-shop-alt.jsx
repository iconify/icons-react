import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/px5rx3bfu.css';
import '../../css/d/d_4_d11xq.css';
import '../../css/t/tphifsbxc.css';
import '../../css/v/vq3dajbed.css';
import '../../css/y/yeau1bb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="px5rx3bfu"/><path class="d_4_d11xq"/><path class="tphifsbxc"/><path class="vq3dajbed"/><path class="yeau1bb_s"/></g>`,
		"fallback": "iconoir:small-shop-alt",
	});
}

export default Component;
