import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfcgk_l-w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfcgk_l-w"/>`,
		"fallback": "at-icons:nut-and-bolt",
	});
}

export default Component;
