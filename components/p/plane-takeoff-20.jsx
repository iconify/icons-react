import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui-3y7kiv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui-3y7kiv"/>`,
		"fallback": "energy-icons:plane-takeoff-20",
	});
}

export default Component;
