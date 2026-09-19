import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfm5imxge.css';
import '../../css/u/u5ykzlbde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfm5imxge"/><path class="u5ykzlbde"/>`,
		"fallback": "ion:trash",
	});
}

export default Component;
