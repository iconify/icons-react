import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-b4wo2a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-b4wo2a"/>`,
		"fallback": "garden:rocket-fill-16",
	});
}

export default Component;
