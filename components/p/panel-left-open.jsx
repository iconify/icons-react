import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k6ss2pbgk.css';
import '../../css/f/fgjiv0bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k6ss2pbgk"/><path class="fgjiv0bpy"/></g>`,
		"fallback": "vadivam:panel-left-open",
	});
}

export default Component;
