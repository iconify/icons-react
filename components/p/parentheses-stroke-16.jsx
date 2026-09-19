import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsp1_aclb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsp1_aclb"/>`,
		"fallback": "garden:parentheses-stroke-16",
	});
}

export default Component;
