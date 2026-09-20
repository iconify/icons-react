import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai0e078-i.css';
import '../../css/i/ipw5bzbjz.css';
import '../../css/t/twp8wbb9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai0e078-i"/><path class="ipw5bzbjz"/><path class="twp8wbb9h"/>`,
		"fallback": "selfhst:listing-lab",
	});
}

export default Component;
