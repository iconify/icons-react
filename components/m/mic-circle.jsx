import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqaee4b-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqaee4b-w"/>`,
		"fallback": "ion:mic-circle",
	});
}

export default Component;
