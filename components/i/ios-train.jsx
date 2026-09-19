import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0f-scclc.css';
import '../../css/a/a-gh_pbjk.css';
import '../../css/m/me9tsg_kt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0f-scclc"/><path class="a-gh_pbjk"/><circle class="me9tsg_kt"/>`,
		"fallback": "ion:ios-train",
	});
}

export default Component;
