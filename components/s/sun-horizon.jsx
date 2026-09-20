import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt0vcpc-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt0vcpc-i"/>`,
		"fallback": "nrk:sun-horizon",
	});
}

export default Component;
