import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlu2tcchk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlu2tcchk"/>`,
		"fallback": "fa7-solid:sort-alpha-down-alt",
	});
}

export default Component;
