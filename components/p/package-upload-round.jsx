import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwif_xb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwif_xb1l"/>`,
		"fallback": "coolicons:package-upload-round",
	});
}

export default Component;
