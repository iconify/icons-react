import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd2k8rb-n.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd2k8rb-n"/>`,
		"fallback": "fa6-solid:square-plus",
	});
}

export default Component;
