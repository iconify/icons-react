import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5lyd3h6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5lyd3h6n"/>`,
		"fallback": "file-icons:test-perl",
	});
}

export default Component;
