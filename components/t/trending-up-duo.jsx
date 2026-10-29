import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gm6dav2hm.css';
import '../../css/a/ax2ntcc7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gm6dav2hm"/><path class="ax2ntcc7z wm-a"/></g>`,
		"fallback": "withicons:trending-up-duo",
	});
}

export default Component;
