import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6n6fybga.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6n6fybga"/>`,
		"fallback": "fluent-mdl2:storage-optical",
	});
}

export default Component;
