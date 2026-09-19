import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nji6j1bhn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nji6j1bhn"/>`,
		"fallback": "fa7-brands:uber",
	});
}

export default Component;
