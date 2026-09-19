import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyd8mfyoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyd8mfyoa"/>`,
		"fallback": "iconamoon:link-external",
	});
}

export default Component;
