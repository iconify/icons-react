import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw6_8x8qs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw6_8x8qs"/>`,
		"fallback": "qlementine-icons:wav-16",
	});
}

export default Component;
