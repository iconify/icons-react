import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5ta4hb9u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5ta4hb9u"/>`,
		"fallback": "octicon:stop-16",
	});
}

export default Component;
