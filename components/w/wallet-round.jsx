import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snmt_-buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snmt_-buq"/>`,
		"fallback": "coolicons:wallet-round",
	});
}

export default Component;
