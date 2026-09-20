import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq-8jxbvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq-8jxbvf"/>`,
		"fallback": "selfhst:visa-dark",
	});
}

export default Component;
