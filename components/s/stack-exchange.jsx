import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxg9gvbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxg9gvbxz"/>`,
		"fallback": "thesvg-color:stack-exchange",
	});
}

export default Component;
