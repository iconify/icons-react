import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye8rm259n.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye8rm259n"/>`,
		"fallback": "fa6-solid:rectangle-list",
	});
}

export default Component;
