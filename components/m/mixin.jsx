import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6boxob1u.css';

const viewBox = {"width":418,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6boxob1u"/>`,
		"fallback": "file-icons:mixin",
	});
}

export default Component;
