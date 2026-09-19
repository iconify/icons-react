import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8t4m96uj.css';

const viewBox = {"width":435,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8t4m96uj"/>`,
		"fallback": "file-icons:libuv",
	});
}

export default Component;
