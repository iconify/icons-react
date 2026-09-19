import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tktr2s5ge.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tktr2s5ge"/>`,
		"fallback": "whh:pixelshield",
	});
}

export default Component;
