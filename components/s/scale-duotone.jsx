import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgk3uwbvd.css';
import '../../css/p/p0jpkgbuv.css';
import '../../css/h/hxuxb_bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgk3uwbvd"/><path class="p0jpkgbuv"/><path class="hxuxb_bgp"/></g>`,
		"fallback": "lucide-extended:scale-duotone",
	});
}

export default Component;
