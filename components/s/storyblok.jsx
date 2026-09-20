import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk487_b_a.css';

const viewBox = {"width":256,"height":302};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk487_b_a"/>`,
		"fallback": "thesvg-color:storyblok",
	});
}

export default Component;
