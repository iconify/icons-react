import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/no3980b3f.css';
import '../../css/h/hpltkbl3t.css';
import '../../css/y/yq5tuwk6d.css';
import '../../css/g/gb_sf0bff.css';
import '../../css/h/hm1lzmgnv.css';
import '../../css/b/bz1al3u0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="no3980b3f wm-deco"/><path class="hpltkbl3t wm-deco"/><path class="wm-k yq5tuwk6d"/><path class="gb_sf0bff wm-a"/><path class="hm1lzmgnv wm-s"/><path class="bz1al3u0y wm-a"/></g>`,
		"fallback": "withicons:oven-blueprint",
	});
}

export default Component;
