import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twkgc5b0r.css';
import '../../css/t/t9_dv_b3n.css';
import '../../css/q/qjpiqoipd.css';
import '../../css/v/vxv2ev7vp.css';
import '../../css/l/llpb4oixu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twkgc5b0r"/><path class="t9_dv_b3n"/><path class="qjpiqoipd"/><path class="vxv2ev7vp"/><path class="llpb4oixu"/>`,
		"fallback": "energy-icons:tram-48-bold",
	});
}

export default Component;
