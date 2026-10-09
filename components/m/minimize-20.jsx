import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-lwpu35p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-lwpu35p"/>`,
		"fallback": "energy-icons:minimize-20",
	});
}

export default Component;
