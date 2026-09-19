import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbv695bsf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbv695bsf"/>`,
		"fallback": "carbon:microphone-off",
	});
}

export default Component;
