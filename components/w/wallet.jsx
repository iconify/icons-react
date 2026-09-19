import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q96vfwgwg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q96vfwgwg"/>`,
		"fallback": "bi:wallet",
	});
}

export default Component;
