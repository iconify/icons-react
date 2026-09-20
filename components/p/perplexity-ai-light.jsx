import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erj7oo6ms.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erj7oo6ms"/>`,
		"fallback": "selfhst:perplexity-ai-light",
	});
}

export default Component;
