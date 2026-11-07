import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvuoxcc7c.css';
import '../../css/b/bbi4wky7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uvuoxcc7c"/><path class="bbi4wky7o"/>`,
		"fallback": "solar:moon-sleep-bold-duotone",
	});
}

export default Component;
