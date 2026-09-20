import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mny6kj1pr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mny6kj1pr"/>`,
		"fallback": "roentgen:tactile-paving-x-5",
	});
}

export default Component;
