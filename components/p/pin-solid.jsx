import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwt1mrbko.css';
import '../../css/n/ntdc2345g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vwt1mrbko"/><path class="ntdc2345g"/></g>`,
		"fallback": "iconoir:pin-solid",
	});
}

export default Component;
