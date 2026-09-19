import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr7hfvz7m.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr7hfvz7m"/>`,
		"fallback": "whh:rubyalt",
	});
}

export default Component;
