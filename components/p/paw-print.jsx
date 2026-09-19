import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fft0npbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fft0npbjj"/>`,
		"fallback": "boxicons:paw-print",
	});
}

export default Component;
