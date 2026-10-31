import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmfxnmbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmfxnmbtc"/>`,
		"fallback": "coolicons:square-more-horizontal-fill-round",
	});
}

export default Component;
