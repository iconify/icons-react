import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adci3faeg.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adci3faeg"/>`,
		"fallback": "fa-solid:star-half",
	});
}

export default Component;
