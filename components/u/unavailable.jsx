import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i4vnvjbyp.css';
import '../../css/v/vwatux5wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i4vnvjbyp"/><path class="vwatux5wb"/></g>`,
		"fallback": "hugeicons:unavailable",
	});
}

export default Component;
