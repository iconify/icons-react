import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiff-v72c.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiff-v72c"/>`,
		"fallback": "fa-brands:odnoklassniki-square",
	});
}

export default Component;
