import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oezaxpo8x.css';
import '../../css/g/gfk6kebjy.css';
import '../../css/s/s3cglumea.css';
import '../../css/n/n4rawnq3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oezaxpo8x"/><path class="gfk6kebjy"/><path class="s3cglumea"/><path class="n4rawnq3v"/></g>`,
		"fallback": "solar:link-broken-line-duotone",
	});
}

export default Component;
