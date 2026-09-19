import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dvjg30spu.css';
import '../../css/r/ru3ge-0dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dvjg30spu"/><path class="ru3ge-0dy"/></g>`,
		"fallback": "iconamoon:location-pin",
	});
}

export default Component;
