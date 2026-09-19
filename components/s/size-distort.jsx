import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8advlwls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b f8advlwls"/>`,
		"fallback": "boxicons:size-distort",
	});
}

export default Component;
