import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa55b9btm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa55b9btm"/>`,
		"fallback": "qlementine-icons:stop-16",
	});
}

export default Component;
