import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxa_hyp1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxa_hyp1o"/>`,
		"fallback": "selfhst:t3-code-light",
	});
}

export default Component;
