import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr17dabrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr17dabrk"/>`,
		"fallback": "thesvg:migadu",
	});
}

export default Component;
