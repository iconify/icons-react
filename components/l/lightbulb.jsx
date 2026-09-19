import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guzb39b0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guzb39b0z"/>`,
		"fallback": "at-icons:lightbulb",
	});
}

export default Component;
