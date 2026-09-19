import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbl1uabtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbl1uabtn"/>`,
		"fallback": "hugeicons:resize-field",
	});
}

export default Component;
