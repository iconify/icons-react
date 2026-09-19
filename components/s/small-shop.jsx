import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tphifsbxc.css';
import '../../css/v/vq3dajbed.css';
import '../../css/y/yeau1bb_s.css';
import '../../css/p/px5rx3bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tphifsbxc"/><path class="vq3dajbed"/><path class="yeau1bb_s"/><path class="px5rx3bfu"/></g>`,
		"fallback": "iconoir:small-shop",
	});
}

export default Component;
