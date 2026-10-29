import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jura4nbok.css';
import '../../css/f/fcpcu9i2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jura4nbok"/><path class="fcpcu9i2b wm-a"/></g>`,
		"fallback": "withicons:magnet",
	});
}

export default Component;
