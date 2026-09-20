import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfnw5t5bx.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfnw5t5bx"/>`,
		"fallback": "octicon:light-bulb",
	});
}

export default Component;
