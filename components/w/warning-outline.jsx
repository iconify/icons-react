import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7-96frbe.css';
import '../../css/x/x-g8qp0ij.css';
import '../../css/i/iw3w-abnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7-96frbe"/><path class="x-g8qp0ij"/><path class="iw3w-abnu"/>`,
		"fallback": "ion:warning-outline",
	});
}

export default Component;
