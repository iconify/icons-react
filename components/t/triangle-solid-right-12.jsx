import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngnn3mbga.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngnn3mbga"/>`,
		"fallback": "fluent-mdl2:triangle-solid-right-12",
	});
}

export default Component;
