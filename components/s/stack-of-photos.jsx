import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5syerbez.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5syerbez"/>`,
		"fallback": "wpf:stack-of-photos",
	});
}

export default Component;
