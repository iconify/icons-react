import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9h5ad7cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9h5ad7cz"/>`,
		"fallback": "mdi:numeric-8-box-multiple",
	});
}

export default Component;
