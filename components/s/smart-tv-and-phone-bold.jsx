import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc8efss-r.css';
import '../../css/s/s5tfg_bzk.css';
import '../../css/l/lpv8jrqyx.css';
import '../../css/e/ey005ib1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc8efss-r"/><path class="s5tfg_bzk"/><path class="lpv8jrqyx"/><path class="ey005ib1m"/>`,
		"fallback": "streamline-ultimate:smart-tv-and-phone-bold",
	});
}

export default Component;
