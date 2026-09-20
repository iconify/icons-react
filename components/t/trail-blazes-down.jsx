import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df4jy5b2u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df4jy5b2u"/>`,
		"fallback": "pinhead:trail-blazes-down",
	});
}

export default Component;
