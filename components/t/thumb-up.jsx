import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo-lb0b8j.css';

const viewBox = {"width":472,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo-lb0b8j"/>`,
		"fallback": "zmdi:thumb-up",
	});
}

export default Component;
