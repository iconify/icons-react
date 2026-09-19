import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj4xb5biu.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj4xb5biu"/>`,
		"fallback": "whh:pigpenc",
	});
}

export default Component;
