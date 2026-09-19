import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcrw8i3lq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcrw8i3lq"/>`,
		"fallback": "ion:ios-cloud-done",
	});
}

export default Component;
