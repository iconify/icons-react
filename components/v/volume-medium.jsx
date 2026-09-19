import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raliu5b3x.css';
import '../../css/d/d1olnibrd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raliu5b3x"/><path class="d1olnibrd"/>`,
		"fallback": "ion:volume-medium",
	});
}

export default Component;
