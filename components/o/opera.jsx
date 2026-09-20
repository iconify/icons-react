import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvb64fcio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvb64fcio"/>`,
		"fallback": "uim:opera",
	});
}

export default Component;
