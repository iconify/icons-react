import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fber9ibwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fber9ibwq"/>`,
		"fallback": "meteor-icons:pexels",
	});
}

export default Component;
