import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix-pf_jrx.css';
import '../../css/r/r3q5yh9_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix-pf_jrx"/><path class="r3q5yh9_s"/>`,
		"fallback": "selfhst:kubernetes",
	});
}

export default Component;
