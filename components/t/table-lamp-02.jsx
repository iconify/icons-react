import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/swvhcgbhv.css';
import '../../css/o/odjtimb2n.css';
import '../../css/l/lfej7qb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="swvhcgbhv"/><path class="odjtimb2n"/><path class="lfej7qb0k"/></g>`,
		"fallback": "hugeicons:table-lamp-02",
	});
}

export default Component;
