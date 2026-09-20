import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_qh4u67n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_qh4u67n"/>`,
		"fallback": "selfhst:perplexity-ai-dark",
	});
}

export default Component;
