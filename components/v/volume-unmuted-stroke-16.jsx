import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agd753o9w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agd753o9w"/>`,
		"fallback": "garden:volume-unmuted-stroke-16",
	});
}

export default Component;
