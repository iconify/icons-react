import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw5jzub_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw5jzub_o"/>`,
		"fallback": "eos-icons:pod",
	});
}

export default Component;
