import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oov0fabhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oov0fabhe"/>`,
		"fallback": "selfhst:ups-light",
	});
}

export default Component;
