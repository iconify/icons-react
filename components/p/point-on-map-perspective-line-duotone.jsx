import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rc4qvxc7z.css';
import '../../css/l/lxvimfgoy.css';
import '../../css/k/k04p0xb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rc4qvxc7z"/><path class="lxvimfgoy"/><path class="k04p0xb8w"/></g>`,
		"fallback": "solar:point-on-map-perspective-line-duotone",
	});
}

export default Component;
