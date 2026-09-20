import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neg8u-b1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neg8u-b1b"/>`,
		"fallback": "selfhst:trueconf-light",
	});
}

export default Component;
