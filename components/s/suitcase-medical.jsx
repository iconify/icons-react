import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehs6s-drt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehs6s-drt"/>`,
		"fallback": "fa6-solid:suitcase-medical",
	});
}

export default Component;
