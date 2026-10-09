import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qff4tsb_j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qff4tsb_j"/>`,
		"fallback": "energy-icons:link-off-20",
	});
}

export default Component;
