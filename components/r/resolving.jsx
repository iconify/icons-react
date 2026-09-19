import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a27jbu7pp.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a27jbu7pp"/>`,
		"fallback": "fa6-brands:resolving",
	});
}

export default Component;
