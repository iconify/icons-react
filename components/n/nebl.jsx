import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1m1ux7to.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1m1ux7to"/>`,
		"fallback": "cryptocurrency:nebl",
	});
}

export default Component;
