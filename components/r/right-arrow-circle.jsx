import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr8u2x3pd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr8u2x3pd"/>`,
		"fallback": "ps:right-arrow-circle",
	});
}

export default Component;
