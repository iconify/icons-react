import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpb0q2cet.css';
import '../../css/l/l8k158baf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpb0q2cet"/><path class="l8k158baf"/>`,
		"fallback": "ion:tv",
	});
}

export default Component;
