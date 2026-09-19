import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eoyo7mb1z.css';
import '../../css/m/m8fqv418y.css';
import '../../css/e/eoec-qy5u.css';
import '../../css/b/bb82cgb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eoyo7mb1z"/><path class="m8fqv418y"/><path class="eoec-qy5u"/><path class="bb82cgb6x"/></g>`,
		"fallback": "hugeicons:quote-down",
	});
}

export default Component;
