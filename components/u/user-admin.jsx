import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by3hfac2y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by3hfac2y"/>`,
		"fallback": "carbon:user-admin",
	});
}

export default Component;
