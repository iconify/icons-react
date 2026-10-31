import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlgb3ob_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlgb3ob_q"/>`,
		"fallback": "coolicons:warning-bulk-round",
	});
}

export default Component;
