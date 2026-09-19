import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyfok-mpt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyfok-mpt"/>`,
		"fallback": "garden:overflow-vertical-fill-12",
	});
}

export default Component;
