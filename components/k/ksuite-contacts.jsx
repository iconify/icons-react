import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fut96rbkh.css';
import '../../css/w/waobp-biz.css';
import '../../css/v/v5ifasbxi.css';
import '../../css/f/fb9fhtmzb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fut96rbkh"/><path class="waobp-biz"/><path class="v5ifasbxi"/><path class="fb9fhtmzb"/>`,
		"fallback": "selfhst:ksuite-contacts",
	});
}

export default Component;
