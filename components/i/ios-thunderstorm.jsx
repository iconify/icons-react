import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g48a6w0ps.css';
import '../../css/x/xwy_3hbfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g48a6w0ps"/><path class="xwy_3hbfw"/>`,
		"fallback": "ion:ios-thunderstorm",
	});
}

export default Component;
