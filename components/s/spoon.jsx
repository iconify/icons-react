import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g18q7hdew.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g18q7hdew"/>`,
		"fallback": "whh:spoon",
	});
}

export default Component;
