import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-0a_5-7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-0a_5-7a"/>`,
		"fallback": "bi:pause-circle-fill",
	});
}

export default Component;
