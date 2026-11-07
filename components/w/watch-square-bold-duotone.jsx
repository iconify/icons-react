import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfja0b30f.css';
import '../../css/e/en06yf5_q.css';
import '../../css/q/q290k1p3z.css';
import '../../css/n/n71meqx1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfja0b30f"/><path class="en06yf5_q"/><path class="q290k1p3z"/><path class="n71meqx1z"/>`,
		"fallback": "solar:watch-square-bold-duotone",
	});
}

export default Component;
