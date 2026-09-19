import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy8405bfr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy8405bfr"/>`,
		"fallback": "bi:perplexity",
	});
}

export default Component;
