import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwbeni1pi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwbeni1pi"/>`,
		"fallback": "fluent-mdl2:secondary-nav",
	});
}

export default Component;
