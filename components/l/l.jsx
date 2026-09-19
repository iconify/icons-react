import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo6itgbnc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo6itgbnc"/>`,
		"fallback": "fa7-solid:l",
	});
}

export default Component;
