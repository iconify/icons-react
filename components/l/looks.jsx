import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k85tt3ajc.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k85tt3ajc"/>`,
		"fallback": "zmdi:looks",
	});
}

export default Component;
