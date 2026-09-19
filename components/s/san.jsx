import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug3hazb5o.css';

const viewBox = {"width":425,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug3hazb5o"/>`,
		"fallback": "file-icons:san",
	});
}

export default Component;
