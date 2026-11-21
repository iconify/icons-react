import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-5ugbtyd.css';
import '../../css/b/b9e_5bbiu.css';
import '../../css/b/b6lawlqju.css';
import '../../css/u/uxtrxm_nt.css';
import '../../css/v/vfr9u-oxx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<filter id="SVGYjVSNduJ"><feGaussianBlur stdDeviation="2.8"/></filter><path filter="url(#SVGYjVSNduJ)" class="d-5ugbtyd"/><radialGradient id="SVGKzIrqtjw" cx="425.671" cy="41.248" r="261.656" gradientTransform="matrix(1.54075 .00151 .00111 -1.07785 -444.86 296.36)" gradientUnits="userSpaceOnUse"><stop offset="0" class="b9e_5bbiu"/><stop offset=".41" class="b6lawlqju"/><stop offset="1" class="uxtrxm_nt"/></radialGradient><path fill="url(#SVGKzIrqtjw)" class="vfr9u-oxx"/>`,
		"fallback": "selfhst:the-pirate-bay",
	});
}

export default Component;
