import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7f4pj88b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7f4pj88b"/>`,
		"fallback": "file-icons:v8-turbofan",
	});
}

export default Component;
