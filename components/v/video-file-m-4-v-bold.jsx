import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l93-z5byc.css';
import '../../css/t/tc4axubag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l93-z5byc"/><path class="tc4axubag"/>`,
		"fallback": "streamline-ultimate:video-file-m-4-v-bold",
	});
}

export default Component;
