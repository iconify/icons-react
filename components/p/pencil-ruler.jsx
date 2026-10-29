import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eb3rjyo2a.css';
import '../../css/t/tistclhya.css';
import '../../css/x/x5r58dbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="eb3rjyo2a wm-k"/><path class="tistclhya wm-a"/><path class="x5r58dbfw"/></g>`,
		"fallback": "withicons-bauhaus:pencil-ruler",
	});
}

export default Component;
