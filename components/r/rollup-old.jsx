import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcxr7fb-s.css';

const viewBox = {"width":446,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcxr7fb-s"/>`,
		"fallback": "file-icons:rollup-old",
	});
}

export default Component;
