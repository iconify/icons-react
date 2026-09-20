import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwq_k-uvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwq_k-uvo"/>`,
		"fallback": "roentgen:japan-historic",
	});
}

export default Component;
