import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt4gf1vpk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt4gf1vpk"/>`,
		"fallback": "ep:milk-tea",
	});
}

export default Component;
