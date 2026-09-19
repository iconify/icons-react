import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4_czfbpz.css';
import '../../css/u/uhn9qnbwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4_czfbpz"/><path class="uhn9qnbwc"/>`,
		"fallback": "formkit:settings",
	});
}

export default Component;
