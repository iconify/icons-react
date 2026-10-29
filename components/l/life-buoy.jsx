import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uhxia1b7z.css';
import '../../css/g/gar_1fxaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uhxia1b7z"/><path class="gar_1fxaz"/></g>`,
		"fallback": "withicons-bauhaus:life-buoy",
	});
}

export default Component;
