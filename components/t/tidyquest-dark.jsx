import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw3h4vb5b.css';
import '../../css/e/eyfhqgb-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw3h4vb5b"/><path class="eyfhqgb-h"/>`,
		"fallback": "selfhst:tidyquest-dark",
	});
}

export default Component;
