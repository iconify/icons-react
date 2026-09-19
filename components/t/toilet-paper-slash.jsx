import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-0lb3bsi.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-0lb3bsi"/>`,
		"fallback": "fa6-solid:toilet-paper-slash",
	});
}

export default Component;
