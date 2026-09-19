import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd_-5rqcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wd_-5rqcu"/>`,
		"fallback": "heroicons:paper-clip-16-solid",
	});
}

export default Component;
