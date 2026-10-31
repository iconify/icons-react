import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dku-ycbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dku-ycbtv"/>`,
		"fallback": "coolicons:sun-dim-round",
	});
}

export default Component;
