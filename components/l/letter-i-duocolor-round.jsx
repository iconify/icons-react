import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0n2rp83n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0n2rp83n"/>`,
		"fallback": "coolicons:letter-i-duocolor-round",
	});
}

export default Component;
