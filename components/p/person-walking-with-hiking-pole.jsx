import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-a68sb-t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-a68sb-t"/>`,
		"fallback": "pinhead:person-walking-with-hiking-pole",
	});
}

export default Component;
