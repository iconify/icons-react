import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l5uzomw4p.css';
import '../../css/g/gsd0i4bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l5uzomw4p"/><path class="gsd0i4bir"/></g>`,
		"fallback": "reicon:text-highlight",
	});
}

export default Component;
