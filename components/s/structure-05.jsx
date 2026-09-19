import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c54mrrbsr.css';
import '../../css/k/kue8ccbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c54mrrbsr"/><path class="kue8ccbkj"/></g>`,
		"fallback": "hugeicons:structure-05",
	});
}

export default Component;
