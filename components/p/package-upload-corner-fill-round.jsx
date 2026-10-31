import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0h54ux4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0h54ux4d"/>`,
		"fallback": "coolicons:package-upload-corner-fill-round",
	});
}

export default Component;
