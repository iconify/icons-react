import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz55z5bay.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uz55z5bay"/>`,
		"fallback": "streamline-flex:shopping-bag-hand-bag-2-remix",
	});
}

export default Component;
