import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv_1wzb4e.css';
import '../../css/m/m2prtlavp.css';
import '../../css/w/w9bnwpm8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv_1wzb4e"/><path class="m2prtlavp"/><path class="w9bnwpm8v"/>`,
		"fallback": "selfhst:silo-media-server-dark",
	});
}

export default Component;
