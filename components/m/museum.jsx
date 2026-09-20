import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyte08niz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyte08niz"/>`,
		"fallback": "temaki:museum",
	});
}

export default Component;
