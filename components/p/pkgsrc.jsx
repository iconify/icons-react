import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktl4fubtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktl4fubtn"/>`,
		"fallback": "thesvg-color:pkgsrc",
	});
}

export default Component;
