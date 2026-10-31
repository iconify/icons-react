import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldgncw1xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldgncw1xg"/>`,
		"fallback": "coolicons:network-fill-round",
	});
}

export default Component;
