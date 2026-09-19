import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xas4q0rmh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="xas4q0rmh"/>`,
		"fallback": "charm:square",
	});
}

export default Component;
