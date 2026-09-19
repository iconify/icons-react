import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-95x3bia.css';
import '../../css/h/hdz9ffk6k.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 l-95x3bia"/><path class="clr-i-outline clr-i-outline-path-2 hdz9ffk6k"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:resize-line",
	});
}

export default Component;
