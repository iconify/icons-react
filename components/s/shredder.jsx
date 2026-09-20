import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bybcw2boh.css';
import '../../css/j/jr609tbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bybcw2boh"/><path class="jr609tbff"/></g>`,
		"fallback": "streamline-sharp:shredder",
	});
}

export default Component;
