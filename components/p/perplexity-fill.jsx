import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjn0pz9-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjn0pz9-h"/>`,
		"fallback": "mingcute:perplexity-fill",
	});
}

export default Component;
