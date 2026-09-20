import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyuucx0_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyuucx0_a"/>`,
		"fallback": "token:kas",
	});
}

export default Component;
