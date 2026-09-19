import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okmv9tbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okmv9tbdv"/>`,
		"fallback": "cbi:serie-a",
	});
}

export default Component;
