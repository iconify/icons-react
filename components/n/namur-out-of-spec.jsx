import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1iud0s8x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1iud0s8x"/>`,
		"fallback": "ix:namur-out-of-spec",
	});
}

export default Component;
