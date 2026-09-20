import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp6tztbud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp6tztbud"/>`,
		"fallback": "roentgen:toilet-bowl",
	});
}

export default Component;
