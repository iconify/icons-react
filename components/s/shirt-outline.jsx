import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exs91hbwo.css';
import '../../css/k/kxpsf4byp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exs91hbwo"/><path class="kxpsf4byp"/>`,
		"fallback": "famicons:shirt-outline",
	});
}

export default Component;
