import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc8_0qt7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc8_0qt7f"/>`,
		"fallback": "cuida:long-text-outline",
	});
}

export default Component;
