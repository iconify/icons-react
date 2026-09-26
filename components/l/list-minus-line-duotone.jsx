import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynnqgt8sp.css';
import '../../css/r/rhlnpmbpq.css';
import '../../css/v/vi7mzdtvt.css';
import '../../css/z/zbwqridka.css';
import '../../css/c/c79b8acay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ynnqgt8sp"/><path class="rhlnpmbpq"/><path class="vi7mzdtvt"/><path class="zbwqridka"/><path class="c79b8acay"/></g>`,
		"fallback": "solar:list-minus-line-duotone",
	});
}

export default Component;
