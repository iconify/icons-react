import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myr7cwtvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myr7cwtvn"/>`,
		"fallback": "simple-icons:nzxt",
	});
}

export default Component;
