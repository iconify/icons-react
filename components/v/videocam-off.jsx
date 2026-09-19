import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvlzdyfkb.css';
import '../../css/q/qm_k6gbmc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvlzdyfkb"/><path class="qm_k6gbmc"/>`,
		"fallback": "ion:videocam-off",
	});
}

export default Component;
