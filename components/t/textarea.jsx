import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf_i67yps.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf_i67yps"/>`,
		"fallback": "bi:textarea",
	});
}

export default Component;
