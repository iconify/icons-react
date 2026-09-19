import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xdw8tmbkh.css';
import '../../css/j/jiaf59bmv.css';
import '../../css/x/xzp7pacbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xdw8tmbkh"/><path class="jiaf59bmv"/><path class="xzp7pacbt"/></g>`,
		"fallback": "hugeicons:mail-unlock-02",
	});
}

export default Component;
