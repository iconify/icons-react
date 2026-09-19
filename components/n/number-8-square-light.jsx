import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yzqd_nbaw.css';
import '../../css/p/pp3v195nj.css';
import '../../css/r/rs-d_y_0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="yzqd_nbaw"/><circle class="pp3v195nj"/><circle class="rs-d_y_0o"/></g>`,
		"fallback": "iconamoon:number-8-square-light",
	});
}

export default Component;
