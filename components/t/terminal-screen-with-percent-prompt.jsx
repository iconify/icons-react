import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afsz9ac8i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afsz9ac8i"/>`,
		"fallback": "pinhead:terminal-screen-with-percent-prompt",
	});
}

export default Component;
