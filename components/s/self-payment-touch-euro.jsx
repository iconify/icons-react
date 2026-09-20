import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pophfab3n.css';
import '../../css/k/kdll3bcvp.css';
import '../../css/j/jqu5yptnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pophfab3n"/><path class="kdll3bcvp"/><path class="jqu5yptnc"/></g>`,
		"fallback": "streamline-ultimate:self-payment-touch-euro",
	});
}

export default Component;
