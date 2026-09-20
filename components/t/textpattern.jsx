import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy35qbymc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy35qbymc"/>`,
		"fallback": "thesvg:textpattern",
	});
}

export default Component;
