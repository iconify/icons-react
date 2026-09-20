import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq3gmebpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq3gmebpu"/>`,
		"fallback": "solar:test-tube-minimalistic-linear",
	});
}

export default Component;
