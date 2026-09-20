import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm4zygbze.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm4zygbze"/>`,
		"fallback": "pinhead:pill-bottle-with-circular-pill",
	});
}

export default Component;
