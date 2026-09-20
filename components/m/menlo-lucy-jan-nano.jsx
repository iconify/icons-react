import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8fa9u_0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8fa9u_0k"/>`,
		"fallback": "thesvg-color:menlo-lucy-jan-nano",
	});
}

export default Component;
