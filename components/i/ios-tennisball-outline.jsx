import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1283djp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in1283djp"/>`,
		"fallback": "ion:ios-tennisball-outline",
	});
}

export default Component;
