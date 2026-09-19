import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awp9mj42a.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awp9mj42a"/>`,
		"fallback": "fa6-solid:trash",
	});
}

export default Component;
