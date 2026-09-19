import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8089ybkd.css';
import '../../css/u/uc-p4fbql.css';

const viewBox = {"width":24,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8089ybkd"/><path class="uc-p4fbql"/></g>`,
		"fallback": "et:map-pin",
	});
}

export default Component;
