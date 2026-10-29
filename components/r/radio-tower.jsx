import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g3f5cwbbp.css';
import '../../css/w/wd66k1bjc.css';
import '../../css/l/l8mj6jmuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g3f5cwbbp"/><path class="wd66k1bjc"/><path class="l8mj6jmuh"/></g>`,
		"fallback": "withicons-bauhaus:radio-tower",
	});
}

export default Component;
