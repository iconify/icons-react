import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj7341b6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj7341b6n"/>`,
		"fallback": "carbon:map-identify",
	});
}

export default Component;
