import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye3j8cb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye3j8cb9g"/>`,
		"fallback": "thesvg-color:remark",
	});
}

export default Component;
