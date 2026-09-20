import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eql7hzsqg.css';
import '../../css/t/tjx5o8dfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eql7hzsqg"/><path class="tjx5o8dfb"/></g>`,
		"fallback": "solar:leaf-line-duotone",
	});
}

export default Component;
