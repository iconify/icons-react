import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gdvdupecv.css';
import '../../css/w/wxxx193iv.css';
import '../../css/o/ogpl226vk.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="gdvdupecv"/><path class="wxxx193iv"/><path class="ogpl226vk"/></g>`,
		"fallback": "bpmn:lasso-tool",
	});
}

export default Component;
