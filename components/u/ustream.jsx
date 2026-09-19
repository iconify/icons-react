import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhd497buh.css';

const viewBox = {"width":650,"height":679};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhd497buh"/>`,
		"fallback": "ls:ustream",
	});
}

export default Component;
