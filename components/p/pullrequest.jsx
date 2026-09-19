import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt0etot3l.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt0etot3l"/>`,
		"fallback": "whh:pullrequest",
	});
}

export default Component;
