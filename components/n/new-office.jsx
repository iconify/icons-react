import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qjjjy4boz.css';
import '../../css/m/mw0po8bwv.css';
import '../../css/i/i7y0tbbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qjjjy4boz"/><path class="mw0po8bwv"/><path class="i7y0tbbcq"/></g>`,
		"fallback": "hugeicons:new-office",
	});
}

export default Component;
