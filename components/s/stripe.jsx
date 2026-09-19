import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5be5-ssr.css';
import '../../css/u/u8j5knbrx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5be5-ssr"/><path class="u8j5knbrx"/>`,
		"fallback": "formkit:stripe",
	});
}

export default Component;
