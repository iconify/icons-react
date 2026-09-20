import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lczo6ys_s.css';
import '../../css/c/cxrrxpb0b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lczo6ys_s"/><path class="cxrrxpb0b"/>`,
		"fallback": "ooui:mathematics-display-default",
	});
}

export default Component;
