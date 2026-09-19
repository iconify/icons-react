import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m60n7yb-z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m60n7yb-z"/>`,
		"fallback": "dinkie-icons:size-text-small",
	});
}

export default Component;
