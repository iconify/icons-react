import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pld9fvbkz.css';
import '../../css/u/uvhrn1bbw.css';
import '../../css/n/nfquxfbmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pld9fvbkz"/><path class="uvhrn1bbw"/><path class="nfquxfbmi"/>`,
		"fallback": "fxemoji:squaredid",
	});
}

export default Component;
