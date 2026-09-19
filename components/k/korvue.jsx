import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so9b0vatz.css';

const viewBox = {"width":446,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so9b0vatz"/>`,
		"fallback": "fa6-brands:korvue",
	});
}

export default Component;
