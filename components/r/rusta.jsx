import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltgkmpbdc.css';
import '../../css/f/flakb15jf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltgkmpbdc"/><path class="flakb15jf"/>`,
		"fallback": "selfhst:rusta",
	});
}

export default Component;
