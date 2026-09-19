import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1em5i3_b.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1em5i3_b"/>`,
		"fallback": "fontisto:kickstarter",
	});
}

export default Component;
