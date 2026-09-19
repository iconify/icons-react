import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff375zpxv.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff375zpxv"/>`,
		"fallback": "zmdi:map",
	});
}

export default Component;
