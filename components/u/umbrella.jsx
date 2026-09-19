import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyxb-y9is.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyxb-y9is"/>`,
		"fallback": "fluent-mdl2:umbrella",
	});
}

export default Component;
