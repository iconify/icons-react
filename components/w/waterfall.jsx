import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5qn0db8c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5qn0db8c"/>`,
		"fallback": "maki:waterfall",
	});
}

export default Component;
