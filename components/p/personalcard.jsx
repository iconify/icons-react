import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqla-2jpp.css';
import '../../css/s/sduqpc76e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oqla-2jpp"/><path class="sduqpc76e"/></g>`,
		"fallback": "reicon:personalcard",
	});
}

export default Component;
