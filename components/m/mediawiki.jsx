import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6_61xbyj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6_61xbyj"/>`,
		"fallback": "file-icons:mediawiki",
	});
}

export default Component;
