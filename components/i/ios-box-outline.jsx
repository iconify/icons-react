import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4-2d34yr.css';
import '../../css/h/hqoymybvq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4-2d34yr"/><path class="hqoymybvq"/>`,
		"fallback": "ion:ios-box-outline",
	});
}

export default Component;
