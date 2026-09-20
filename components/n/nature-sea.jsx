import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plh78kbqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plh78kbqu"/>`,
		"fallback": "streamline-block:nature-sea",
	});
}

export default Component;
