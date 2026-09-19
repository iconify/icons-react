import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt5z90bty.css';
import '../../css/o/op7udfbjf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt5z90bty"/><path class="op7udfbjf"/>`,
		"fallback": "ion:ios-code",
	});
}

export default Component;
