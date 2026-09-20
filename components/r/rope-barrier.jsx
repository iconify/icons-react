import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emvy9ge9i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emvy9ge9i"/>`,
		"fallback": "roentgen:rope-barrier",
	});
}

export default Component;
