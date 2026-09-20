import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd8-kbjvy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd8-kbjvy"/>`,
		"fallback": "roentgen:p",
	});
}

export default Component;
