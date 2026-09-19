import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aedwb1bzu.css';

const viewBox = {"width":35,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aedwb1bzu"/>`,
		"fallback": "et:telescope",
	});
}

export default Component;
