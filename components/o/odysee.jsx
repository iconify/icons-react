import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c24ihfzcq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c24ihfzcq"/>`,
		"fallback": "fa6-brands:odysee",
	});
}

export default Component;
