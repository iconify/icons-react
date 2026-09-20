import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_h9hlbzc.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_h9hlbzc"/>`,
		"fallback": "jam:link",
	});
}

export default Component;
