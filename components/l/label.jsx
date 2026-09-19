import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9s_-2o4x.css';
import '../../css/t/t93u26bci.css';
import '../../css/d/denr8sb8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9s_-2o4x"/><path class="t93u26bci"/><path class="denr8sb8q"/>`,
		"fallback": "fxemoji:label",
	});
}

export default Component;
