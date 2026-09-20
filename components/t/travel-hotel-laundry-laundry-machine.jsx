import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/x/xn6ppk3eg.css';
import '../../css/v/vz1gksbyx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><circle class="xn6ppk3eg"/><path class="vz1gksbyx"/></g>`,
		"fallback": "streamline:travel-hotel-laundry-laundry-machine",
	});
}

export default Component;
