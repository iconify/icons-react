import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhcjeybja.css';
import '../../css/o/o9ffdfb9u.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhcjeybja"/><path class="o9ffdfb9u"/>`,
		"fallback": "flag:pe-4x3",
	});
}

export default Component;
