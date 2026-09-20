import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzxl6r1_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzxl6r1_d"/>`,
		"fallback": "selfhst:kiroshi-dark",
	});
}

export default Component;
