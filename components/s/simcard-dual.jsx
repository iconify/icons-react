import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rs-7s_ltd.css';
import '../../css/s/si5fuubuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rs-7s_ltd"/><path class="si5fuubuq"/></g>`,
		"fallback": "hugeicons:simcard-dual",
	});
}

export default Component;
