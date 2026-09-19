import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln17k8b9b.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln17k8b9b"/>`,
		"fallback": "fa6-solid:plane-slash",
	});
}

export default Component;
