import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fffwhzuxd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fffwhzuxd"/>`,
		"fallback": "catppuccin:java-class-abstract",
	});
}

export default Component;
