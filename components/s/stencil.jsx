import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuge6-bwv.css';

const viewBox = {"width":405,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuge6-bwv"/>`,
		"fallback": "file-icons:stencil",
	});
}

export default Component;
