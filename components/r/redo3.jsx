import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wi27y7kjn.css';
import '../../css/f/f2yo0d6nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wi27y7kjn"/><path class="f2yo0d6nj"/></g>`,
		"fallback": "reicon:redo3",
	});
}

export default Component;
