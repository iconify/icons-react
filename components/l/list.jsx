import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao4bbvbco.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao4bbvbco"/>`,
		"fallback": "raphael:list",
	});
}

export default Component;
