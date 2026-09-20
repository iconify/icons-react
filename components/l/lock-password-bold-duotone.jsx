import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/feuyj31wv.css';
import '../../css/p/p5pon9bvv.css';
import '../../css/i/i4k5dgufd.css';
import '../../css/k/ktxylym0h.css';
import '../../css/a/ak_e8qmgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="feuyj31wv"/><path class="p5pon9bvv"/><path class="i4k5dgufd"/><path class="ktxylym0h"/><path class="ak_e8qmgg"/></g>`,
		"fallback": "solar:lock-password-bold-duotone",
	});
}

export default Component;
