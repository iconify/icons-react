import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-d78hkpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-d78hkpq"/>`,
		"fallback": "coolicons:letter-h-bulk-round",
	});
}

export default Component;
