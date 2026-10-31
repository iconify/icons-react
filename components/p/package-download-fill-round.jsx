import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlnvach5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlnvach5k"/>`,
		"fallback": "coolicons:package-download-fill-round",
	});
}

export default Component;
