import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0x5bsqdd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0x5bsqdd"/>`,
		"fallback": "map:tennis",
	});
}

export default Component;
