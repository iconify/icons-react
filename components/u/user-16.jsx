import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1u65mb1a.css';
import '../../css/e/e6siqkbmp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1u65mb1a"/><path clip-rule="evenodd" class="e6siqkbmp"/>`,
		"fallback": "qlementine-icons:user-16",
	});
}

export default Component;
