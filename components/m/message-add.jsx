import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/z/zqaivibei.css';
import '../../css/r/rmygli74d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="zqaivibei"/><path class="rmygli74d"/></g>`,
		"fallback": "reicon:message-add",
	});
}

export default Component;
