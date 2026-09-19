import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szy1_ul7k.css';
import '../../css/f/fgrg7ftet.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szy1_ul7k"/><path class="fgrg7ftet"/>`,
		"fallback": "garden:signpost-stroke-12",
	});
}

export default Component;
