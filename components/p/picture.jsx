import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh7bkobdk.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh7bkobdk"/>`,
		"fallback": "fontisto:picture",
	});
}

export default Component;
