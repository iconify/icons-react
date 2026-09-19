import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkend5bbc.css';
import '../../css/o/o0czmk70w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkend5bbc"/><path class="o0czmk70w"/>`,
		"fallback": "ion:paintbucket",
	});
}

export default Component;
