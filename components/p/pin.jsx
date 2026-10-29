import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ykc6yv3ga.css';
import '../../css/d/de1npwusp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ykc6yv3ga"/><path class="de1npwusp wm-a"/></g>`,
		"fallback": "withicons:pin",
	});
}

export default Component;
