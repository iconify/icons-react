import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kmnr8jx4o.css';
import '../../css/v/v-20dbb3u.css';
import '../../css/v/vg0fnxsll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="kmnr8jx4o"/><path class="v-20dbb3u"/><path class="vg0fnxsll"/></g>`,
		"fallback": "hugeicons:relieved-02",
	});
}

export default Component;
