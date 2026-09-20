import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcqslb6ow.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcqslb6ow"/>`,
		"fallback": "la:tint-slash-solid",
	});
}

export default Component;
