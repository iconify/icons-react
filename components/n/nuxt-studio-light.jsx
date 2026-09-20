import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ano3tzyta.css';
import '../../css/t/tey8c23jn.css';

const viewBox = {"width":227,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ano3tzyta"/><path class="tey8c23jn"/></g>`,
		"fallback": "thesvg-color:nuxt-studio-light",
	});
}

export default Component;
