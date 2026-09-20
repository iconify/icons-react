import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxq3-nspf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxq3-nspf"/>`,
		"fallback": "simple-icons:posit",
	});
}

export default Component;
