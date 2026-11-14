import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkaa0nbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkaa0nbcs"/>`,
		"fallback": "hugeicons:super-intelligence-speech",
	});
}

export default Component;
