import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shiuxup4c.css';
import '../../css/q/q0exz4q8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><ellipse class="shiuxup4c"/><ellipse class="q0exz4q8e"/></g>`,
		"fallback": "hugeicons:torus",
	});
}

export default Component;
