import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqjkksdmh.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqjkksdmh"/>`,
		"fallback": "fontisto:list-2",
	});
}

export default Component;
