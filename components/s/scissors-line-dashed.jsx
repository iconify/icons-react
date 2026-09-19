import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taopsuymn.css';
import '../../css/y/y9ynmbbhf.css';
import '../../css/s/sxl1tlgcy.css';
import '../../css/m/mel2rybyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="taopsuymn"/><circle class="y9ynmbbhf"/><path class="sxl1tlgcy"/><circle class="mel2rybyw"/></g>`,
		"fallback": "hugeicons:scissors-line-dashed",
	});
}

export default Component;
