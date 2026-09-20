import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjic3kb-l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjic3kb-l"/>`,
		"fallback": "maki:police",
	});
}

export default Component;
