import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxog6t6n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrxog6t6n"/>`,
		"fallback": "pinhead:om-on-square",
	});
}

export default Component;
