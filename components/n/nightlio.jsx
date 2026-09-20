import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw5h94i8m.css';
import '../../css/i/ingurx9qd.css';
import '../../css/u/u2ff1xk4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw5h94i8m"/><path class="ingurx9qd"/><path class="u2ff1xk4j"/>`,
		"fallback": "selfhst:nightlio",
	});
}

export default Component;
