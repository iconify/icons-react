import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqlamj4tr.css';
import '../../css/c/ctcmn9izu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uqlamj4tr"/><path class="ctcmn9izu"/>`,
		"fallback": "typcn:spanner-outline",
	});
}

export default Component;
