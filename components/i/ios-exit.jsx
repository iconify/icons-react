import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmzuscc9w.css';
import '../../css/o/oynddubhd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmzuscc9w"/><path class="oynddubhd"/>`,
		"fallback": "ion:ios-exit",
	});
}

export default Component;
