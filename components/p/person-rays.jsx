import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueenlu1wm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueenlu1wm"/>`,
		"fallback": "fa6-solid:person-rays",
	});
}

export default Component;
