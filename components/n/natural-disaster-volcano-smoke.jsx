import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lp259dblt.css';
import '../../css/z/zxoo5x2zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lp259dblt"/><path class="zxoo5x2zq"/></g>`,
		"fallback": "streamline-ultimate:natural-disaster-volcano-smoke",
	});
}

export default Component;
