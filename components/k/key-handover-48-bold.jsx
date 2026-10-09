import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtbad_v3a.css';
import '../../css/z/zlmlrhbpp.css';
import '../../css/w/w_ns1hbzc.css';
import '../../css/n/nhv_i6bfk.css';
import '../../css/v/vra7nyw8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtbad_v3a"/><path class="zlmlrhbpp"/><path class="w_ns1hbzc"/><path class="nhv_i6bfk"/><path class="vra7nyw8z"/>`,
		"fallback": "energy-icons:key-handover-48-bold",
	});
}

export default Component;
