import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m-2e2acrw.css';
import '../../css/d/de1npwusp.css';
import '../../css/y/ykc6yv3ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m-2e2acrw"/><path class="de1npwusp wm-a"/><path class="ykc6yv3ga"/></g>`,
		"fallback": "withicons:pin-duo",
	});
}

export default Component;
