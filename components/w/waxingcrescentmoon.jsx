import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhy7nh5dn.css';
import '../../css/n/nlmsi6etm.css';
import '../../css/p/pab16wdqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhy7nh5dn"/><path class="nlmsi6etm"/><path class="pab16wdqn"/>`,
		"fallback": "fxemoji:waxingcrescentmoon",
	});
}

export default Component;
