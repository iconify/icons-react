import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx3fe_t0r.css';
import '../../css/r/rj_m6ufoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kx3fe_t0r"/><path class="rj_m6ufoq"/>`,
		"fallback": "solar:text-italic-bold-duotone",
	});
}

export default Component;
