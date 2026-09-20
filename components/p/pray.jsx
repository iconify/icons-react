import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve5kkwb-p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve5kkwb-p"/>`,
		"fallback": "picon:pray",
	});
}

export default Component;
