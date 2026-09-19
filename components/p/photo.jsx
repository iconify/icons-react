import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhfgwrg9a.css';

const viewBox = {"width":666,"height":686};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhfgwrg9a"/>`,
		"fallback": "ls:photo",
	});
}

export default Component;
