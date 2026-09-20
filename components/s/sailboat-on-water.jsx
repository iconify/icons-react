import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hylio2wag.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hylio2wag"/>`,
		"fallback": "pinhead:sailboat-on-water",
	});
}

export default Component;
