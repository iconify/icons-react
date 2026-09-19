import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6ypah4og.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6ypah4og"/>`,
		"fallback": "fluent-mdl2:raw-source",
	});
}

export default Component;
