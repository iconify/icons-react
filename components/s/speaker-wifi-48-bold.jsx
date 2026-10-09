import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sop1nkb2y.css';
import '../../css/k/knt5gf6ty.css';
import '../../css/x/xq3w5ib_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sop1nkb2y"/><path class="knt5gf6ty"/><path class="xq3w5ib_v"/>`,
		"fallback": "energy-icons:speaker-wifi-48-bold",
	});
}

export default Component;
