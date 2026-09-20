import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj4sx_wkb.css';
import '../../css/i/ipyyj6ggt.css';
import '../../css/s/sun_m7tdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj4sx_wkb"/><path class="ipyyj6ggt"/><path class="sun_m7tdj"/>`,
		"fallback": "selfhst:watchtower-light",
	});
}

export default Component;
