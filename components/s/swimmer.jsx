import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axc5g2bmn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axc5g2bmn"/>`,
		"fallback": "fa-solid:swimmer",
	});
}

export default Component;
