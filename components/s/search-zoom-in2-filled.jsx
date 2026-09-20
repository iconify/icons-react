import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydsm8obkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydsm8obkd"/>`,
		"fallback": "reicon:search-zoom-in2-filled",
	});
}

export default Component;
