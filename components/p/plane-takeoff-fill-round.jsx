import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9pf8_h-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9pf8_h-p"/>`,
		"fallback": "coolicons:plane-takeoff-fill-round",
	});
}

export default Component;
