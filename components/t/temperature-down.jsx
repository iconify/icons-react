import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyaoer-ho.css';
import '../../css/v/vc7kmr92z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pyaoer-ho"/><path class="vc7kmr92z"/></g>`,
		"fallback": "iconoir:temperature-down",
	});
}

export default Component;
