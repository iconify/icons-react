import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xury47xca.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xury47xca"/>`,
		"fallback": "fa7-brands:react",
	});
}

export default Component;
