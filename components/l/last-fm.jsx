import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fht-7-b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fht-7-b5a"/>`,
		"fallback": "cbi:last-fm",
	});
}

export default Component;
