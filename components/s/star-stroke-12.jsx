import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn27sub2b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn27sub2b"/>`,
		"fallback": "garden:star-stroke-12",
	});
}

export default Component;
