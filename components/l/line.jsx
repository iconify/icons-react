import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5mp2kwl.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5mp2kwl"/>`,
		"fallback": "fontisto:line",
	});
}

export default Component;
