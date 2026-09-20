import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh7t0lb8g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh7t0lb8g"/>`,
		"fallback": "temaki:water",
	});
}

export default Component;
