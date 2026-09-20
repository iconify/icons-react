import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4h3a_bxb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4h3a_bxb"/>`,
		"fallback": "qlementine-icons:jack-16",
	});
}

export default Component;
