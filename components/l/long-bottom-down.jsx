import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m39lfrbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m39lfrbew"/>`,
		"fallback": "ci:long-bottom-down",
	});
}

export default Component;
