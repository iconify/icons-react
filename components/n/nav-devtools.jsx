import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gii8w5ebd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gii8w5ebd"/>`,
		"fallback": "oui:nav-devtools",
	});
}

export default Component;
