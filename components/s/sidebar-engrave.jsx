import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sqojf1bzw.css';
import '../../css/o/o9zlyg2gf.css';
import '../../css/a/ao21d5blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sqojf1bzw"/><path class="o9zlyg2gf wm-shadow"/><path class="ao21d5blb"/></g>`,
		"fallback": "withicons:sidebar-engrave",
	});
}

export default Component;
