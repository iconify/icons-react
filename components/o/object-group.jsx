import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g65zm-xgf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g65zm-xgf"/>`,
		"fallback": "fa6-solid:object-group",
	});
}

export default Component;
