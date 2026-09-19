import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b760q_svr.css';
import '../../css/k/k20av7rgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b760q_svr"/><path class="k20av7rgb"/>`,
		"fallback": "carbon:rain-drop",
	});
}

export default Component;
