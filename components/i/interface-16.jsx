import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vji_uo4-j.css';
import '../../css/b/bsx5zebbq.css';
import '../../css/q/qb75cnf9c.css';
import '../../css/j/j5c61kb4y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vji_uo4-j"/><path clip-rule="evenodd" class="bsx5zebbq"/><path class="qb75cnf9c"/><path clip-rule="evenodd" class="j5c61kb4y"/>`,
		"fallback": "nonicons:interface-16",
	});
}

export default Component;
