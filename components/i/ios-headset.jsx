import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luyue7b6t.css';
import '../../css/e/ew7h4abcs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luyue7b6t"/><path class="ew7h4abcs"/>`,
		"fallback": "ion:ios-headset",
	});
}

export default Component;
