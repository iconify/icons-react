import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlei2-bly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlei2-bly"/>`,
		"fallback": "fa-solid:tools",
	});
}

export default Component;
