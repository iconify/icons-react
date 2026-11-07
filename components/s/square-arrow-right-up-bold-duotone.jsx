import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0tkg9bgp.css';
import '../../css/p/pbv_9xbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0tkg9bgp"/><path class="pbv_9xbam"/>`,
		"fallback": "solar:square-arrow-right-up-bold-duotone",
	});
}

export default Component;
