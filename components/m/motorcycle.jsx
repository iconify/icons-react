import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6h057zgn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6h057zgn"/>`,
		"fallback": "fa-solid:motorcycle",
	});
}

export default Component;
