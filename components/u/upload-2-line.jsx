import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5xns0ati.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5xns0ati"/>`,
		"fallback": "ri:upload-2-line",
	});
}

export default Component;
