import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sbrjebj6j.css';
import '../../css/l/luo1b9d3l.css';
import '../../css/d/dnpvs6bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sbrjebj6j"/><path class="luo1b9d3l"/><path class="dnpvs6bkb"/></g>`,
		"fallback": "hugeicons:mail-block-02",
	});
}

export default Component;
