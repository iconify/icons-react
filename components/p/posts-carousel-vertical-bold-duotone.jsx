import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o0l0yrncv.css';
import '../../css/y/yhu770tis.css';
import '../../css/t/tslomuedm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="o0l0yrncv"/><path class="yhu770tis"/></g><path class="tslomuedm"/>`,
		"fallback": "solar:posts-carousel-vertical-bold-duotone",
	});
}

export default Component;
