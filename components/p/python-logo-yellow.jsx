import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzp9m4bgk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzp9m4bgk"/>`,
		"fallback": "fluent-mdl2:python-logo-yellow",
	});
}

export default Component;
