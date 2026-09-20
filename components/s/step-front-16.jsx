import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzt8l7xqk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzt8l7xqk"/>`,
		"fallback": "qlementine-icons:step-front-16",
	});
}

export default Component;
