import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoqqhwb4v.css';
import '../../css/c/cv4vh3bkr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoqqhwb4v"/><path class="cv4vh3bkr"/>`,
		"fallback": "icomoon-free:warning",
	});
}

export default Component;
