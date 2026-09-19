import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgjulrbun.css';
import '../../css/w/w558l_3fd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgjulrbun"/><path class="w558l_3fd"/>`,
		"fallback": "ion:md-flash-off",
	});
}

export default Component;
