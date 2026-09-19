import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1zcd-6-x.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1zcd-6-x"/>`,
		"fallback": "fa6-brands:square-snapchat",
	});
}

export default Component;
