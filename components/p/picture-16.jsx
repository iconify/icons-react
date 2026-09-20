import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc05_6b-l.css';
import '../../css/m/mn1a8yxak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yc05_6b-l"/><path clip-rule="evenodd" class="mn1a8yxak"/>`,
		"fallback": "qlementine-icons:picture-16",
	});
}

export default Component;
