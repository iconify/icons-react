import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n819e5urp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n819e5urp"/>`,
		"fallback": "solar:upload-track-2-outline",
	});
}

export default Component;
