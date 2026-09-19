import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3dvt7jpm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3dvt7jpm"/>`,
		"fallback": "whh:picasa",
	});
}

export default Component;
