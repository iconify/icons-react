import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubf4_r3tz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubf4_r3tz"/>`,
		"fallback": "fluent-mdl2:renewal-current",
	});
}

export default Component;
