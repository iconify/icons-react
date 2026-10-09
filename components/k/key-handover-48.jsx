import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd6bhzvez.css';
import '../../css/g/g81g92bif.css';
import '../../css/u/u4s52t5jm.css';
import '../../css/v/vsgt2_ggn.css';
import '../../css/b/bn-8t67hm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd6bhzvez"/><path class="g81g92bif"/><path class="u4s52t5jm"/><path class="vsgt2_ggn"/><path class="bn-8t67hm"/>`,
		"fallback": "energy-icons:key-handover-48",
	});
}

export default Component;
