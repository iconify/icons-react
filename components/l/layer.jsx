import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xrjvalbrz.css';
import '../../css/y/y96tq1brp.css';
import '../../css/i/ito-ncoyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xrjvalbrz"/><path class="y96tq1brp"/><path class="ito-ncoyj"/></g>`,
		"fallback": "reicon:layer",
	});
}

export default Component;
