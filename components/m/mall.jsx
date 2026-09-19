import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea8c8v_1d.css';

const viewBox = {"width":384,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea8c8v_1d"/>`,
		"fallback": "zmdi:mall",
	});
}

export default Component;
