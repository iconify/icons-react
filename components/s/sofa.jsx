import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dh8m1cb4j.css';
import '../../css/i/ib_0vib5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dh8m1cb4j"/><path class="ib_0vib5x"/></g>`,
		"fallback": "iconoir:sofa",
	});
}

export default Component;
