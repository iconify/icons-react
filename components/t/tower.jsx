import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwa86wb1f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwa86wb1f"/>`,
		"fallback": "at-icons:tower",
	});
}

export default Component;
