import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y653e0pli.css';
import '../../css/y/yol3kp1rs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="y653e0pli"/><path class="yol3kp1rs"/>`,
		"fallback": "selfhst:releasewatcher",
	});
}

export default Component;
