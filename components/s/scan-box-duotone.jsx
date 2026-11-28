import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4b3--kmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4b3--kmd primary"/>`,
		"fallback": "iconaut:scan-box-duotone",
	});
}

export default Component;
