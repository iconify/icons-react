import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzsgnbbgg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzsgnbbgg"/>`,
		"fallback": "pinhead:trail-blazes-top-right",
	});
}

export default Component;
