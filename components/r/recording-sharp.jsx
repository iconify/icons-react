import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djn_kwbxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djn_kwbxi"/>`,
		"fallback": "ion:recording-sharp",
	});
}

export default Component;
