import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gktj-0bky.css';
import '../../css/d/dze0b5gur.css';
import '../../css/o/ojps6bbxn.css';
import '../../css/x/x2w9p6cxi.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gktj-0bky"/><path class="dze0b5gur"/><path class="ojps6bbxn"/><path class="x2w9p6cxi"/><path class="rsrhfac5n"/></g>`,
		"fallback": "solar:volume-cross-line-duotone",
	});
}

export default Component;
