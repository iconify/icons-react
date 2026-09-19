import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi70slb6r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi70slb6r"/>`,
		"fallback": "fa6-solid:o",
	});
}

export default Component;
