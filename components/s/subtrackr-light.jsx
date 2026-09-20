import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl0xf91ea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl0xf91ea"/>`,
		"fallback": "selfhst:subtrackr-light",
	});
}

export default Component;
