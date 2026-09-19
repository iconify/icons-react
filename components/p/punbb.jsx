import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f98h45baz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f98h45baz"/>`,
		"fallback": "whh:punbb",
	});
}

export default Component;
