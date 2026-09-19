import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3-_e5b5g.css';

const viewBox = {"width":1024,"height":674};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3-_e5b5g"/>`,
		"fallback": "whh:networksignal",
	});
}

export default Component;
