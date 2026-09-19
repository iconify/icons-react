import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emmbnebwc.css';
import '../../css/p/pu8y5lb1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emmbnebwc"/><path class="pu8y5lb1l"/>`,
		"fallback": "carbon:train-profile",
	});
}

export default Component;
