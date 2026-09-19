import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l-j09py8p.css';
import '../../css/m/m4c2jibyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l-j09py8p"/><path class="m4c2jibyv"/></g>`,
		"fallback": "iconoir:tools",
	});
}

export default Component;
