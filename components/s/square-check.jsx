import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytv8j6l6t.css';
import '../../css/b/bqhst35fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytv8j6l6t"/><path class="bqhst35fc"/>`,
		"fallback": "stash:square-check",
	});
}

export default Component;
