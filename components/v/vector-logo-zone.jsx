import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6k1q-bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6k1q-bzd"/>`,
		"fallback": "thesvg:vector-logo-zone",
	});
}

export default Component;
