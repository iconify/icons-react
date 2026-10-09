import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umeximbue.css';
import '../../css/z/zyqw81bux.css';
import '../../css/r/r98z67v2b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umeximbue"/><path class="zyqw81bux"/><path class="r98z67v2b"/>`,
		"fallback": "energy-icons:lighthouse-20-bold",
	});
}

export default Component;
