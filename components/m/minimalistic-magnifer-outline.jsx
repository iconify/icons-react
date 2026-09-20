import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ito0-lbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ito0-lbsl"/>`,
		"fallback": "solar:minimalistic-magnifer-outline",
	});
}

export default Component;
