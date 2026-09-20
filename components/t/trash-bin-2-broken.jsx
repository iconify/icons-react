import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fh6a-dbrt.css';
import '../../css/o/o628czf4s.css';
import '../../css/c/ck-x5--3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fh6a-dbrt"/><path class="o628czf4s"/><path class="ck-x5--3n"/></g>`,
		"fallback": "solar:trash-bin-2-broken",
	});
}

export default Component;
