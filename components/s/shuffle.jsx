import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psv830b9f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psv830b9f"/>`,
		"fallback": "simple-line-icons:shuffle",
	});
}

export default Component;
