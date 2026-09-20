import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zrz74tbgv.css';
import '../../css/y/ynnqgt8sp.css';
import '../../css/r/rhlnpmbpq.css';
import '../../css/v/vi7mzdtvt.css';
import '../../css/z/zbwqridka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zrz74tbgv"/><path class="ynnqgt8sp"/><path class="rhlnpmbpq"/><path class="vi7mzdtvt"/><path class="zbwqridka"/></g>`,
		"fallback": "solar:list-cross-line-duotone",
	});
}

export default Component;
