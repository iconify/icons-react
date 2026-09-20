import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el_v__osi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el_v__osi"/>`,
		"fallback": "mdi:lock-percent-open",
	});
}

export default Component;
