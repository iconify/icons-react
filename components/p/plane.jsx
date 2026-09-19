import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh21nwb7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh21nwb7p"/>`,
		"fallback": "ps:plane",
	});
}

export default Component;
