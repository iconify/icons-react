import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueg_mznks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueg_mznks"/>`,
		"fallback": "si:twitter-line",
	});
}

export default Component;
