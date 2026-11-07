import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yjol71blk.css';
import '../../css/e/ec6wqh_-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yjol71blk"/><path class="ec6wqh_-a"/></g>`,
		"fallback": "solar:table-rows-split-line-duotone",
	});
}

export default Component;
