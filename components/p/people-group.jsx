import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8z2meb3l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8z2meb3l"/>`,
		"fallback": "fa7-solid:people-group",
	});
}

export default Component;
