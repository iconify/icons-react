import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx3lc4baw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx3lc4baw"/>`,
		"fallback": "subway:musk",
	});
}

export default Component;
