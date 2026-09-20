import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5i5oac3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5i5oac3y"/>`,
		"fallback": "qlementine-icons:stop-small-16",
	});
}

export default Component;
