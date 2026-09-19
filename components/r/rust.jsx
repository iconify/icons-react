import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc7hqw7to.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc7hqw7to"/>`,
		"fallback": "fa6-brands:rust",
	});
}

export default Component;
