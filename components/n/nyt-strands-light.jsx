import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7rxhcc7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7rxhcc7g"/>`,
		"fallback": "selfhst:nyt-strands-light",
	});
}

export default Component;
