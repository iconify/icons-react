import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8ew3vpuo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8ew3vpuo"/>`,
		"fallback": "fa7-brands:replyd",
	});
}

export default Component;
