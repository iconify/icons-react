import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwhof2_ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwhof2_ay"/>`,
		"fallback": "coolicons:microphone-round",
	});
}

export default Component;
