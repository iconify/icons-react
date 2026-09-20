import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/absg48b0g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="absg48b0g"/>`,
		"fallback": "subway:symbol-2",
	});
}

export default Component;
