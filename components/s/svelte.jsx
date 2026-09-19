import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdhb-7r4y.css';

const viewBox = {"width":426,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdhb-7r4y"/>`,
		"fallback": "file-icons:svelte",
	});
}

export default Component;
