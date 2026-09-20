import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j3mxzlont.css';
import '../../css/m/mjj4-z-4p.css';
import '../../css/h/hxmvn4bez.css';
import '../../css/m/mi1n120me.css';
import '../../css/k/km54nzbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j3mxzlont"/><path class="mjj4-z-4p"/><path class="hxmvn4bez"/><path class="mi1n120me"/><path class="km54nzbze"/></g>`,
		"fallback": "solar:tv-line-duotone",
	});
}

export default Component;
