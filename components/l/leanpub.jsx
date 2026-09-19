import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cix7ll-iz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cix7ll-iz"/>`,
		"fallback": "fa6-brands:leanpub",
	});
}

export default Component;
