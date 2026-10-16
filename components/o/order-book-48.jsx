import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k961ckbdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k961ckbdl"/>`,
		"fallback": "energy-icons:order-book-48",
	});
}

export default Component;
