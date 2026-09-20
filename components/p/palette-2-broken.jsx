import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l9pb4jh3n.css';
import '../../css/y/yzxt5rhfr.css';
import '../../css/y/yi78wl5tr.css';
import '../../css/c/c3hdb9bdc.css';
import '../../css/z/zlbyb8b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l9pb4jh3n"/><circle class="yzxt5rhfr"/><circle class="yi78wl5tr"/><path class="c3hdb9bdc"/><path class="zlbyb8b6o"/></g>`,
		"fallback": "solar:palette-2-broken",
	});
}

export default Component;
