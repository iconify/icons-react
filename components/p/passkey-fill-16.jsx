import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra00e7bqq.css';
import '../../css/x/xk-_fybgh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra00e7bqq"/><path class="xk-_fybgh"/>`,
		"fallback": "octicon:passkey-fill-16",
	});
}

export default Component;
