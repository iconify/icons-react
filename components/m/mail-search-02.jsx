import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4-ub4dwy.css';
import '../../css/r/rsqqxe7_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4-ub4dwy"/><path class="rsqqxe7_g"/></g>`,
		"fallback": "hugeicons:mail-search-02",
	});
}

export default Component;
