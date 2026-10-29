import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gf-bwkb_o.css';
import '../../css/h/hgt79vbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gf-bwkb_o"/><path class="hgt79vbcd wm-a"/></g>`,
		"fallback": "withicons:thermometer-snowflake-solid",
	});
}

export default Component;
