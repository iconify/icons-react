import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etbmk_b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etbmk_b8a"/>`,
		"fallback": "mingcute:translate-2-ai-fill",
	});
}

export default Component;
