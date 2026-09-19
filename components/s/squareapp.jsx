import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt9y4u0px.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt9y4u0px"/>`,
		"fallback": "whh:squareapp",
	});
}

export default Component;
