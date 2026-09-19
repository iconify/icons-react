import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crpuohb2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crpuohb2r"/>`,
		"fallback": "fa-solid:swatchbook",
	});
}

export default Component;
