import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj_w5bbqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj_w5bbqt"/>`,
		"fallback": "heroicons:moon-16-solid",
	});
}

export default Component;
