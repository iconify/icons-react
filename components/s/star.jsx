import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxrbbfz1l.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxrbbfz1l"/>`,
		"fallback": "fa-regular:star",
	});
}

export default Component;
