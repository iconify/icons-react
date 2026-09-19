import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg0errbvk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg0errbvk"/>`,
		"fallback": "dashicons:pinterest",
	});
}

export default Component;
