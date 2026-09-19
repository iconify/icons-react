import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk80sglnk.css';

const viewBox = {"width":830,"height":810};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk80sglnk"/>`,
		"fallback": "il:twitter",
	});
}

export default Component;
