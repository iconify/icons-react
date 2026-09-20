import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gkwj9qb6t.css';
import '../../css/z/zt9l8boyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gkwj9qb6t"/><path class="zt9l8boyv"/></g>`,
		"fallback": "reicon:teacher",
	});
}

export default Component;
