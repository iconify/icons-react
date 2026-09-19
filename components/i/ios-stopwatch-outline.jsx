import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt3z6yb7q.css';
import '../../css/m/m635pzbjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt3z6yb7q"/><path class="m635pzbjq"/>`,
		"fallback": "ion:ios-stopwatch-outline",
	});
}

export default Component;
