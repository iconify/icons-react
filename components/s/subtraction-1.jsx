import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-0g1m3_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-0g1m3_t"/>`,
		"fallback": "subway:subtraction-1",
	});
}

export default Component;
