import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sze-jacfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sze-jacfw"/>`,
		"fallback": "coolicons:letter-y-duocolor-round",
	});
}

export default Component;
