import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh1p2cbff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh1p2cbff"/>`,
		"fallback": "ix:rhomb",
	});
}

export default Component;
