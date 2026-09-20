import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyjstn5af.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyjstn5af"/>`,
		"fallback": "pinhead:three-chevrons-right-above-conveyor-belt",
	});
}

export default Component;
