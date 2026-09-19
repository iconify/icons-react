import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8wo6sbhh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8wo6sbhh"/>`,
		"fallback": "fluent-mdl2:parameter",
	});
}

export default Component;
