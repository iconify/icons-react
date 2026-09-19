import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv_gh48en.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv_gh48en"/>`,
		"fallback": "bi:mouse2",
	});
}

export default Component;
