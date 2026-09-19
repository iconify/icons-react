import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhso_9btc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhso_9btc"/>`,
		"fallback": "ion:ios-thumbs-up",
	});
}

export default Component;
