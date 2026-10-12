import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fx8ixmbue.css';
import '../../css/y/y768ywb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fx8ixmbue"/><path class="y768ywb3d"/></g>`,
		"fallback": "andrsrxn:refresh",
	});
}

export default Component;
