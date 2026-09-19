import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9xfwac2w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9xfwac2w"/>`,
		"fallback": "carbon:user-feedback",
	});
}

export default Component;
