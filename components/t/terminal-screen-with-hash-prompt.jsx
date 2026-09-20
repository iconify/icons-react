import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ach9e5bmv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ach9e5bmv"/>`,
		"fallback": "pinhead:terminal-screen-with-hash-prompt",
	});
}

export default Component;
