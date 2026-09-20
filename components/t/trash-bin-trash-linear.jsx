import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fh6a-dbrt.css';
import '../../css/u/u8po8xbhj.css';
import '../../css/p/p2-mbsbue.css';
import '../../css/w/w8w5t9ikw.css';
import '../../css/o/o628czf4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fh6a-dbrt"/><path class="u8po8xbhj"/><path class="p2-mbsbue"/><path class="w8w5t9ikw"/><path class="o628czf4s"/></g>`,
		"fallback": "solar:trash-bin-trash-linear",
	});
}

export default Component;
