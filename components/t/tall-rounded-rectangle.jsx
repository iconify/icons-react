import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrtq-8b3o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrtq-8b3o"/>`,
		"fallback": "pinhead:tall-rounded-rectangle",
	});
}

export default Component;
