import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3w_0bctb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3w_0bctb"/>`,
		"fallback": "fluent-mdl2:triangle-right-12",
	});
}

export default Component;
