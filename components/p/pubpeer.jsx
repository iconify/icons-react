import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi17097tb.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi17097tb"/>`,
		"fallback": "academicons:pubpeer",
	});
}

export default Component;
