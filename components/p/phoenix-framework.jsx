import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah-h2x4ww.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah-h2x4ww"/>`,
		"fallback": "fa6-brands:phoenix-framework",
	});
}

export default Component;
