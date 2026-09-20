import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mejmd1bjo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mejmd1bjo"/>`,
		"fallback": "pinhead:lion-and-whistle",
	});
}

export default Component;
