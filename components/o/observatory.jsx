import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nicdqwb5x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nicdqwb5x"/>`,
		"fallback": "roentgen:observatory",
	});
}

export default Component;
