import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg0k5bz1x.css';
import '../../css/d/d47xi2b9o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg0k5bz1x"/><path class="d47xi2b9o"/>`,
		"fallback": "formkit:playcircle",
	});
}

export default Component;
