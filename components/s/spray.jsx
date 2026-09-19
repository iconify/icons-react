import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpzk_4i8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpzk_4i8h"/>`,
		"fallback": "at-icons:spray",
	});
}

export default Component;
