import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5wa9vbik.css';
import '../../css/v/vdt32bytu.css';
import '../../css/y/y6nv1wb6i.css';
import '../../css/b/bppslcvit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5wa9vbik"/><path class="vdt32bytu"/><path class="y6nv1wb6i"/><path class="bppslcvit"/>`,
		"fallback": "selfhst:ties-link-sharing",
	});
}

export default Component;
