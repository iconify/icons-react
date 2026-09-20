import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejmzit6-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejmzit6-t"/>`,
		"fallback": "selfhst:kubernetes-light",
	});
}

export default Component;
