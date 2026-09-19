import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wigy65mwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wigy65mwj"/>`,
		"fallback": "file-icons:test-haskell",
	});
}

export default Component;
