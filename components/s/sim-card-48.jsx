import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy28lqjna.css';
import '../../css/w/w4536acmd.css';
import '../../css/b/bnh_1x4bj.css';
import '../../css/g/gieo_eh2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy28lqjna"/><path class="w4536acmd"/><path class="bnh_1x4bj"/><path class="gieo_eh2m"/>`,
		"fallback": "energy-icons:sim-card-48",
	});
}

export default Component;
