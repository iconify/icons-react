import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i8qdwpbgi.css';
import '../../css/l/l6sd8ob0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i8qdwpbgi"/><path class="l6sd8ob0a"/></g>`,
		"fallback": "hugeicons:smart-watch-03",
	});
}

export default Component;
