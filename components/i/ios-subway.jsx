import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at9237b-b.css';
import '../../css/t/t0f-scclc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at9237b-b"/><path class="t0f-scclc"/>`,
		"fallback": "ion:ios-subway",
	});
}

export default Component;
