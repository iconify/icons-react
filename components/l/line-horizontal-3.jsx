import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlhh4ib8x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlhh4ib8x"/>`,
		"fallback": "f7:line-horizontal-3",
	});
}

export default Component;
