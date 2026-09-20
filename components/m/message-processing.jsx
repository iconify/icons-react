import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blxa5_b8f.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blxa5_b8f"/>`,
		"fallback": "memory:message-processing",
	});
}

export default Component;
