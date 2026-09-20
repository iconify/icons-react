import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kudk1ganc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kudk1ganc"/>`,
		"fallback": "selfhst:mobilizon-light",
	});
}

export default Component;
