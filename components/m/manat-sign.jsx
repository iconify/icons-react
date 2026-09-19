import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayac1_x7f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayac1_x7f"/>`,
		"fallback": "fa7-solid:manat-sign",
	});
}

export default Component;
