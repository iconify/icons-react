import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re5699mtq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re5699mtq"/>`,
		"fallback": "selfhst:perplexity-ai",
	});
}

export default Component;
