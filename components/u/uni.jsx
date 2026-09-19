import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-j8aozoz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-j8aozoz"/>`,
		"fallback": "cryptocurrency:uni",
	});
}

export default Component;
