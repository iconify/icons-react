import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9j0h5ort.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9j0h5ort"/>`,
		"fallback": "guidance:voice-scan",
	});
}

export default Component;
