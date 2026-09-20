import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8cyx9otq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8cyx9otq"/>`,
		"fallback": "ri:slideshow-4-line",
	});
}

export default Component;
