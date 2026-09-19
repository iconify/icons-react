import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx4ak_bnl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx4ak_bnl"/>`,
		"fallback": "codicon:preview",
	});
}

export default Component;
