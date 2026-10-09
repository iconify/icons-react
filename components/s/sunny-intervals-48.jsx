import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb9i7xbnr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb9i7xbnr"/>`,
		"fallback": "energy-icons:sunny-intervals-48",
	});
}

export default Component;
