import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-_x8bctp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-_x8bctp"/>`,
		"fallback": "fa7-brands:stumbleupon-circle",
	});
}

export default Component;
