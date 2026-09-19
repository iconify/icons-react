import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw1hwcn4c.css';
import '../../css/u/u7peyabnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw1hwcn4c"/><circle class="u7peyabnc"/>`,
		"fallback": "ion:walk-outline",
	});
}

export default Component;
