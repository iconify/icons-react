import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k178jpbdb.css';
import '../../css/w/w1v4elx0x.css';
import '../../css/p/ptzmp8bkz.css';
import '../../css/b/b4gq1mb3p.css';

const viewBox = {"width":1000,"height":265.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k178jpbdb"><path class="w1v4elx0x"/><path class="ptzmp8bkz"/><path class="b4gq1mb3p"/></g>`,
		"fallback": "thesvg-color:office-depot",
	});
}

export default Component;
