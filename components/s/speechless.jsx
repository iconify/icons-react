import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0qkxxb-q.css';
import '../../css/u/u0bzg8byf.css';
import '../../css/v/v4-7eu8rv.css';
import '../../css/z/ztmfb6bwu.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="u0qkxxb-q"/><circle class="u0bzg8byf"/><path class="v4-7eu8rv"/><path class="ztmfb6bwu"/>`,
		"fallback": "lineicons:speechless",
	});
}

export default Component;
