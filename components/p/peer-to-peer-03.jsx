import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/al5y9rb2i.css';
import '../../css/n/n90jsqger.css';
import '../../css/z/z0nf3jbvl.css';
import '../../css/x/x50dneb7t.css';
import '../../css/u/usbqyjips.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="al5y9rb2i"/><path class="n90jsqger"/><path class="z0nf3jbvl"/><path class="x50dneb7t"/><path class="usbqyjips"/></g>`,
		"fallback": "hugeicons:peer-to-peer-03",
	});
}

export default Component;
