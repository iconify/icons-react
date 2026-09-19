import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8mbytblu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8mbytblu"/>`,
		"fallback": "fa-brands:penny-arcade",
	});
}

export default Component;
