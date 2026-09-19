import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_r730eqc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_r730eqc"/>`,
		"fallback": "fluent-mdl2:n-p-m-logo",
	});
}

export default Component;
