import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6mqhy2_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6mqhy2_w"/>`,
		"fallback": "ion:ios-infinite",
	});
}

export default Component;
