import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmrg6hbwc.css';
import '../../css/u/u8nonlcqn.css';
import '../../css/p/pvcco7a8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmrg6hbwc"/><path class="u8nonlcqn"/><path class="pvcco7a8u"/>`,
		"fallback": "selfhst:stirling-pdf-light",
	});
}

export default Component;
