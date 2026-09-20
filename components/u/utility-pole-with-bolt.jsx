import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkij9-1rj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkij9-1rj"/>`,
		"fallback": "pinhead:utility-pole-with-bolt",
	});
}

export default Component;
