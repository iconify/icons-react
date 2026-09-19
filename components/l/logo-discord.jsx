import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5z6ltbuc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5z6ltbuc"/>`,
		"fallback": "carbon:logo-discord",
	});
}

export default Component;
