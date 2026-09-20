import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqs2_tb9q.css';
import '../../css/r/rtj2-bcov.css';
import '../../css/v/v8-b9qb2d.css';
import '../../css/d/dlue3xb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqs2_tb9q"/><path class="rtj2-bcov"/><path class="v8-b9qb2d"/><path class="dlue3xb3x"/></g>`,
		"fallback": "tdesign:wealth-1",
	});
}

export default Component;
