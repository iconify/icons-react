import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pji5ilgek.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pji5ilgek"/>`,
		"fallback": "zmdi:toys",
	});
}

export default Component;
