import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfvyi0osq.css';
import '../../css/u/uo31dmb7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfvyi0osq"/><path class="uo31dmb7j"/>`,
		"fallback": "temaki:vending-flat-coin",
	});
}

export default Component;
