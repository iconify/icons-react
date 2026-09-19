import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o63p0bcaz.css';
import '../../css/h/heb6v81zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o63p0bcaz"/><path class="heb6v81zw"/></g>`,
		"fallback": "hugeicons:wanted",
	});
}

export default Component;
