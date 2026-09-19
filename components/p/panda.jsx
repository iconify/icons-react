import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rimfd1bqs.css';

const viewBox = {"width":1026,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rimfd1bqs"/>`,
		"fallback": "whh:panda",
	});
}

export default Component;
