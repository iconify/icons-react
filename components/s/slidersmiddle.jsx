import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdh0-b5ob.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdh0-b5ob"/>`,
		"fallback": "whh:slidersmiddle",
	});
}

export default Component;
