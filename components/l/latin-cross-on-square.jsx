import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9jx6gj_t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9jx6gj_t"/>`,
		"fallback": "pinhead:latin-cross-on-square",
	});
}

export default Component;
