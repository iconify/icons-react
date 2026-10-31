import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj2025skv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj2025skv"/>`,
		"fallback": "coolicons:octagon-check-round",
	});
}

export default Component;
